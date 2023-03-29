import { useEffect } from 'react';
import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getLocale, setLocale } from './helpers/locale';
import { theme } from './theme';

function App() {
  const { t, i18n } = useTranslation(['translation']);

  useEffect(() => {
    console.log('Language Changed');
  }, [i18n.language]);

  const handleClick = () => {
    const locale = getLocale();

    if (locale === 'ko-KR') {
      setLocale('en-US');
    } else {
      setLocale('ko-KR');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button
        sx={{
          mt: '10px',
          ml: '10px',
        }}
        onClick={() => handleClick()}
      >
        {t('jihyunlab')}
      </Button>
    </ThemeProvider>
  );
}

export default App;
