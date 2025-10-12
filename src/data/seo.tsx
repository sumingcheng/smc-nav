import { Category } from '../types';
import { RiSearchLine } from 'react-icons/ri';

export const seo: Category = {
  id: 'seo',
  name: { zh: 'SEO', en: 'SEO' },
  description: { zh: 'SEO分析与网站流量工具', en: 'SEO analysis and website traffic tools' },
  icon: <RiSearchLine className="text-lg" />,
  subcategories: [
    {
      id: 'website-analytics',
      name: { zh: '网站分析', en: 'Website Analytics' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'SimilarWeb Pro', en: 'SimilarWeb Pro' },
          url: 'https://pro.similarweb.com/',
          description: { zh: '全面的网站流量分析、关键词研究和竞争情报平台', en: 'Comprehensive traffic analysis, keyword research and competitive intelligence platform' },
          icon: 'https://www.google.com/s2/favicons?domain=similarweb.com&sz=64',
        },
        {
          name: { zh: 'Google Trends', en: 'Google Trends' },
          url: 'https://trends.google.com/trends/',
          description: { zh: '分析搜索词热度趋势和流行度的工具，提供跨地区、语言和时间的比较数据', en: 'Analyze search trends and popularity across regions, languages and time' },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Keyworddit', en: 'Keyworddit' },
          url: 'https://www.highervisibility.com/seo/tools/keyworddit/',
          description: { zh: '基于Reddit社区挖掘关键词的工具，助力内容营销与SEO策略', en: 'Extract keywords from Reddit to boost content marketing and SEO strategy' },
          icon: 'https://www.google.com/s2/favicons?domain=highervisibility.com&sz=64',
        },
        {
          name: { zh: 'Google Search Console', en: 'Google Search Console' },
          url: 'https://search.google.com/search-console',
          description: { zh: '谷歌提供的免费工具，用于监控网站在谷歌搜索中的表现、解决问题并优化排名', en: "Google's free tool to monitor site performance in search, troubleshoot and optimize rankings" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Bing Webmaster Tools', en: 'Bing Webmaster Tools' },
          url: 'https://www.bing.com/webmasters',
          description: { zh: '必应网站管理员工具，帮助您将网站添加到必应索引中，并查看您网站的性能数据', en: 'Bing webmaster tools to add your site to Bing index and view performance data' },
          icon: 'https://www.google.com/s2/favicons?domain=bing.com&sz=64',
        },
      ],
    },
    {
      id: 'website-performance',
      name: { zh: '网站性能与安全', en: 'Performance & Security' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Cloudflare Dashboard', en: 'Cloudflare Dashboard' },
          url: 'https://dash.cloudflare.com/',
          description: { zh: 'CDN、DNS管理、DDoS防护和网站性能优化平台', en: 'CDN, DNS management, DDoS protection and site performance optimization' },
          icon: 'https://www.google.com/s2/favicons?domain=cloudflare.com&sz=64',
        },
      ],
    },
    {
      id: 'website-monetization',
      name: { zh: '网站变现', en: 'Monetization' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Google AdSense', en: 'Google AdSense' },
          url: 'https://adsense.google.com/',
          description: { zh: '谷歌广告联盟平台，帮助网站所有者通过展示相关广告实现内容变现', en: "Google's ad platform to monetize your content with relevant ads" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
      ],
    },
    {
      id: 'seo-learning',
      name: { zh: 'SEO学习与指南', en: 'SEO Learning & Guides' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Google SEO 指南', en: 'Google SEO Guide' },
          url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-cn',
          description: { zh: '谷歌官方提供的搜索引擎优化入门指南，帮助您了解SEO基础知识和最佳实践', en: "Google's official SEO starter guide with fundamentals and best practices" },
          icon: 'https://www.google.com/s2/favicons?domain=google.com&sz=64',
        },
        {
          name: { zh: 'Shopify SEO 优化指南', en: 'Shopify SEO Guide' },
          url: 'https://www.shopify.com/zh/blog/seo-checklist-online-store',
          description: { zh: 'Shopify 提供的终极SEO优化清单，包含38个实用技巧，助力网站流量增长', en: 'Ultimate SEO checklist with 38 practical tips to boost traffic' },
          icon: 'https://www.google.com/s2/favicons?domain=shopify.com&sz=64',
        },
      ],
    },
  ],
};
