import { ReactElement } from 'react';
import { I18nText } from '../i18n';

export interface Website {
  name: I18nText;
  url: string;
  description: I18nText;
  icon: string;
}

export interface Subcategory {
  id: string;
  name: I18nText;
  description: I18nText;
  websites: Website[];
}

export interface Category {
  id: string;
  name: I18nText;
  description: I18nText;
  icon: string | ReactElement;
  subcategories: Subcategory[];
} 