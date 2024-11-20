import { I18n } from 'i18n-js';
import * as Localization from 'expo-localization';
import en from './translations/en';
import es from './translations/es';

const i18n = new I18n({
  en,
  es,
});

i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = 'en';

export default i18n;