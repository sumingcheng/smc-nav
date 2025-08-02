import { Category } from '../types';
import { RiBriefcaseLine } from 'react-icons/ri';

export const jobs: Category = {
  id: 'jobs',
  name: '找工作',
  description: '求职招聘网站与资源',
  icon: <RiBriefcaseLine className="text-lg" />,
  subcategories: [
    {
      id: 'job-platforms',
      name: '求职平台',
      description: '',
      websites: [
        {
          name: 'Glassdoor',
          url: 'https://www.glassdoor.com',
          description: '提供公司点评、薪资信息和职位搜索的求职平台',
          icon: 'https://www.google.com/s2/favicons?domain=glassdoor.com&sz=64',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/feed/',
          description: '全球最大的职业社交网络平台，提供职业发展和招聘服务',
          icon: 'https://www.google.com/s2/favicons?domain=linkedin.com&sz=64',
        },
      ],
    },
    {
      id: 'web3-jobs',
      name: 'Web3 工作',
      description: '区块链和Web3相关工作机会',
      websites: [
        {
          name: 'Web3.Career',
          url: 'https://web3.career/',
          description: '专注于Web3、区块链和加密货币领域的招聘网站',
          icon: 'https://www.google.com/s2/favicons?domain=web3.career&sz=64',
        },
        {
          name: 'ABetterWeb3',
          url: 'https://abetterweb3.notion.site/',
          description: 'Web3求职资源整合平台，包含职位列表和行业资讯',
          icon: 'https://www.google.com/s2/favicons?domain=notion.site&sz=64',
        },
      ],
    },
  ],
};