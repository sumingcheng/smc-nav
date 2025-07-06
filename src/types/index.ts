import { ReactElement } from 'react';

export interface Website {
  name: string;
  url: string;
  description: string;
  icon: string;
}

export interface Subcategory {
  id: string;
  name: string;
  description: string;
  websites: Website[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string | ReactElement;
  subcategories: Subcategory[];
} 