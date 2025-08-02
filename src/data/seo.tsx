import { Category } from '../types';
import { RiSearchLine } from 'react-icons/ri';

export const seo: Category = {
  id: 'seo',
  name: 'SEO 工具',
  description: 'SEO分析与网站流量工具',
  icon: <RiSearchLine className="text-lg" />,
  subcategories: [
    {
      id: 'website-analytics',
      name: '网站分析',
      description: '网站流量与竞争分析工具',
      websites: [
        {
          name: 'SimilarWeb Pro',
          url: 'https://pro.similarweb.com/',
          description: '全面的网站流量分析、关键词研究和竞争情报平台',
          icon: 'https://www.google.com/s2/favicons?domain=similarweb.com&sz=64',
        },
      ],
    },
  ],
};
