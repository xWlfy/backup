import { useCallback } from 'react';
import i18n from '../i18n';

export const useLocale = () => {
  const setLocale = useCallback((locale: string) => {
    i18n.locale = locale;
  }, []);

  const t = useCallback((key: string, options?: object) => {
    return i18n.t(key, options);
  }, []);

  return { t, setLocale };
};