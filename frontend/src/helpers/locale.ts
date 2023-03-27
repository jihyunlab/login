import i18n from 'i18next';

export const getLocale = (): string => {
  const locale = localStorage.getItem('locale');

  if (!locale) {
    return 'ko-KR';
  }

  return locale;
};

export const setLocale = (locale: string) => {
  if (locale !== 'ko-KR' && locale !== 'en-US') {
    return;
  }

  i18n.changeLanguage(locale);
  localStorage.setItem('locale', locale);
};
