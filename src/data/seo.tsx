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
        {
          name: 'Google Trends',
          url: 'https://trends.google.com/trends/',
          description: '分析搜索词热度趋势和流行度的工具，提供跨地区、语言和时间的比较数据',
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: 'Keyworddit',
          url: 'https://www.highervisibility.com/seo/tools/keyworddit/',
          description: '基于Reddit社区挖掘关键词的工具，助力内容营销与SEO策略',
          icon: 'https://www.google.com/s2/favicons?domain=highervisibility.com&sz=64',
        },
      ],
    },
    {
      id: 'website-performance',
      name: '网站性能与安全',
      description: '网站加速、优化与安全防护工具',
      websites: [
        {
          name: 'Cloudflare Dashboard',
          url: 'https://dash.cloudflare.com/',
          description: 'CDN、DNS管理、DDoS防护和网站性能优化平台',
          icon: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=64',
        },
      ],
    },
  ],
};
