import { Fragment, useEffect } from 'react';
import { Button, CssBaseline } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getLocale, setLocale } from './helpers/locale';

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
    <Fragment>
      <CssBaseline />
      <Button
        variant="contained"
        sx={{
          fontFamily: 'WebNanumSquareNeo',
          fontSize: '12px',
          mt: '10px',
          ml: '10px',
          width: '160px',
          backgroundColor: 'primary.main',
        }}
        onClick={() => handleClick()}
      >
        {t('jihyunlab')}
      </Button>
    </Fragment>
  );
}

export default App;
