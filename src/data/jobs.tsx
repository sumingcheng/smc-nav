import { Category } from '../types';
import { RiBriefcaseLine } from 'react-icons/ri';

export const jobs: Category = {
  id: 'jobs',
  name: { zh: '找工作', en: 'Jobs' },
  description: { zh: '求职招聘网站与资源', en: 'Job search and recruitment resources' },
  icon: <RiBriefcaseLine className="text-lg" />,
  subcategories: [
    {
      id: 'job-platforms',
      name: { zh: '求职平台', en: 'Job Platforms' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Glassdoor', en: 'Glassdoor' },
          url: 'https://www.glassdoor.com',
          description: { zh: '提供公司点评、薪资信息和职位搜索的求职平台', en: 'Job search platform with company reviews, salary info and job listings' },
          icon: 'https://www.google.com/s2/favicons?domain=glassdoor.com&sz=64',
        },
        {
          name: { zh: 'LinkedIn', en: 'LinkedIn' },
          url: 'https://www.linkedin.com/feed/',
          description: { zh: '全球最大的职业社交网络平台，提供职业发展和招聘服务', en: "World's largest professional network for career development and recruitment" },
          icon: 'https://www.google.com/s2/favicons?domain=linkedin.com&sz=64',
        },
      ],
    },
    {
      id: 'web3-jobs',
      name: { zh: 'Web3 工作', en: 'Web3 Jobs' },
      description: { zh: '区块链和Web3相关工作机会', en: 'Blockchain and Web3 job opportunities' },
      websites: [
        {
          name: { zh: 'Web3.Career', en: 'Web3.Career' },
          url: 'https://web3.career/',
          description: { zh: '专注于Web3、区块链和加密货币领域的招聘网站', en: 'Job board focused on Web3, blockchain and crypto careers' },
          icon: 'https://www.google.com/s2/favicons?domain=web3.career&sz=64',
        },
        {
          name: { zh: 'ABetterWeb3', en: 'ABetterWeb3' },
          url: 'https://abetterweb3.notion.site/',
          description: { zh: 'Web3求职资源整合平台，包含职位列表和行业资讯', en: 'Web3 job resources hub with listings and industry news' },
          icon: 'https://www.google.com/s2/favicons?domain=notion.site&sz=64',
        },
      ],
    },
    {
      id: 'salary-resources',
      name: { zh: '薪资资源', en: 'Salary Resources' },
      description: { zh: '了解薪资水平和福利待遇', en: 'Understand salary levels and benefits' },
      websites: [
        {
          name: { zh: 'Levels.fyi', en: 'Levels.fyi' },
          url: 'https://www.levels.fyi/',
          description: { zh: '提供详细的薪资数据和职位信息，帮助了解大公司薪资标准', en: 'Detailed salary data and levels for tech companies' },
          icon: 'https://www.google.com/s2/favicons?domain=levels.fyi&sz=64',
        },
      ],
    },
  ],
};
