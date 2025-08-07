import { Category } from '../types';
import { RiSearchLine } from 'react-icons/ri';

export const seo: Category = {
  id: 'seo',
  name: 'SEO',
  description: 'SEO分析与网站流量工具',
  icon: <RiSearchLine className="text-lg" />,
  subcategories: [
    {
      id: 'website-analytics',
      name: '网站分析',
      description: '',
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
        {
          name: 'Google Search Console',
          url: 'https://search.google.com/search-console',
          description: '谷歌提供的免费工具，用于监控网站在谷歌搜索中的表现、解决问题并优化排名',
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: 'Bing Webmaster Tools',
          url: 'https://www.bing.com/webmasters',
          description: '必应网站管理员工具，帮助您将网站添加到必应索引中，并查看您网站的性能数据',
          icon: 'https://www.google.com/s2/favicons?domain=bing.com&sz=64',
        },
      ],
    },
    {
      id: 'website-performance',
      name: '网站性能与安全',
      description: '',
      websites: [
        {
          name: 'Cloudflare Dashboard',
          url: 'https://dash.cloudflare.com/',
          description: 'CDN、DNS管理、DDoS防护和网站性能优化平台',
          icon: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=64',
        },
      ],
    },
    {
      id: 'website-monetization',
      name: '网站变现',
      description: '',
      websites: [
        {
          name: 'Google AdSense',
          url: 'https://adsense.google.com/',
          description: '谷歌广告联盟平台，帮助网站所有者通过展示相关广告实现内容变现',
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
      ],
    },
  ],
};
