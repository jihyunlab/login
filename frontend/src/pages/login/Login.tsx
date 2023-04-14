import { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { LoginContainer, LoginContent, LoginFooter, LoginHeader } from '../../components/styled/login';
import { useTranslation } from 'react-i18next';
import { useLoginMutation } from '../../services/authApi';
import { setToken } from '../../helpers/jwt';
import { useNavigate } from 'react-router-dom';
import Locale from '../../components/locale/Locale';

function Login() {
  const { t } = useTranslation(['translation']);
  const navigate = useNavigate();

  const [record, setRecord] = useState<Record<string, string | undefined>>({
    email: undefined,
    password: undefined,
  });
  const [error, setError] = useState<string>('');

  const [login] = useLoginMutation();

  const handleLogin = async () => {
    setError(() => '');

    if (!record.email || !record.password) {
      setError(() => 'enterEmailAndPassword');
      return;
    }

    await login(record)
      .unwrap()
      .then((response) => {
        setToken(response.access_token);
        navigate('/home');
      })
      .catch(() => {
        setError(() => 'loginFailed');
      });
  };

  return (
    <LoginContainer>
      <Box component="img" width="11.25rem" sx={{ mb: '0.25rem' }} src="/logo.png" />
      <LoginHeader>
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 'bold' }}>{t('login')}</Typography>
        <Locale />
      </LoginHeader>
      <LoginContent>
        <TextField
          id="email"
          label={t('email')}
          required={true}
          placeholder={t('email') || ''}
          onChange={(event) => setRecord({ ...record, email: event.target.value })}
          error={record.email === '' ? true : false}
          helperText={record.email === '' ? t('enterEmail') : ''}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleLogin();
            }
          }}
        />
        <TextField
          id="password"
          label={t('password')}
          type="password"
          required={true}
          autoComplete="off"
          placeholder={t('password') || ''}
          onChange={(event) => setRecord({ ...record, password: event.target.value })}
          error={record.password === '' ? true : false}
          helperText={record.password === '' ? t('enterPassword') : ''}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              event.preventDefault();
              handleLogin();
            }
          }}
        />
        {error && error !== '' && (
          <Typography color="error" sx={{ ml: '0.875rem', fontSize: '0.75rem', fontWeight: 'bold' }}>
            {t(error)}
          </Typography>
        )}
      </LoginContent>
      <LoginFooter>
        <Button
          onClick={(event) => {
            event.preventDefault();
            handleLogin();
          }}
        >
          {t('login')}
        </Button>
      </LoginFooter>
    </LoginContainer>
  );
}

export default Login;
