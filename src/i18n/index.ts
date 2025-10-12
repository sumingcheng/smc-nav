import { useLocale, Locale } from './locale';

export { useLocale, type Locale };

export interface I18nText {
  zh: string;
  en: string;
}

export const useTranslate = () => {
  const locale = useLocale((state) => state.locale);
  
  return (text: I18nText | string): string => {
    if (typeof text === 'string') {
      return text;
    }
    return text[locale];
  };
};

export const t = (text: I18nText | string, locale: Locale): string => {
  if (typeof text === 'string') {
    return text;
  }
  return text[locale];
};

