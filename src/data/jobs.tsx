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
      name: { zh: '综合求职平台', en: 'General Job Platforms' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'LinkedIn', en: 'LinkedIn' },
          url: 'https://www.linkedin.com/jobs/',
          description: { zh: '全球最大职业社交平台', en: "World's largest professional network" },
          icon: 'https://www.google.com/s2/favicons?domain=linkedin.com&sz=64',
        },
        {
          name: { zh: 'Indeed', en: 'Indeed' },
          url: 'https://www.indeed.com/',
          description: { zh: '全球最大招聘网站', en: "World's largest job site" },
          icon: 'https://www.google.com/s2/favicons?domain=indeed.com&sz=64',
        },
        {
          name: { zh: 'Glassdoor', en: 'Glassdoor' },
          url: 'https://www.glassdoor.com/',
          description: { zh: '公司评价最透明', en: 'Most transparent company reviews' },
          icon: 'https://www.google.com/s2/favicons?domain=glassdoor.com&sz=64',
        },
      ],
    },
    {
      id: 'startup-jobs',
      name: { zh: '创业公司', en: 'Startup Jobs' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Wellfound', en: 'Wellfound' },
          url: 'https://wellfound.com/',
          description: { zh: '创业公司招聘天花板', en: 'Top startup job platform' },
          icon: 'https://www.google.com/s2/favicons?domain=wellfound.com&sz=64',
        },
        {
          name: { zh: 'Y Combinator Work', en: 'Y Combinator Work' },
          url: 'https://www.ycombinator.com/jobs',
          description: { zh: 'YC系创业公司招聘', en: 'Y Combinator job board' },
          icon: 'https://www.google.com/s2/favicons?domain=ycombinator.com&sz=64',
        },
      ],
    },
    {
      id: 'remote-jobs',
      name: { zh: '远程工作', en: 'Remote Jobs' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Remote OK', en: 'Remote OK' },
          url: 'https://remoteok.com/',
          description: { zh: '全球最大远程工作平台', en: 'Largest remote job platform' },
          icon: 'https://www.google.com/s2/favicons?domain=remoteok.com&sz=64',
        },
        {
          name: { zh: 'We Work Remotely', en: 'We Work Remotely' },
          url: 'https://weworkremotely.com/',
          description: { zh: '老牌远程招聘平台', en: 'Veteran remote job board' },
          icon: 'https://www.google.com/s2/favicons?domain=weworkremotely.com&sz=64',
        },
      ],
    },
    {
      id: 'web3-jobs',
      name: { zh: 'Web3 工作', en: 'Web3 Jobs' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Web3.Career', en: 'Web3.Career' },
          url: 'https://web3.career/',
          description: { zh: 'Web3垂直招聘平台', en: 'Web3 vertical job board' },
          icon: 'https://www.google.com/s2/favicons?domain=web3.career&sz=64',
        },
        {
          name: { zh: 'ABetterWeb3', en: 'ABetterWeb3' },
          url: 'https://abetterweb3.notion.site/',
          description: { zh: 'Web3求职资源整合', en: 'Web3 job resources hub' },
          icon: 'https://www.google.com/s2/favicons?domain=notion.site&sz=64',
        },
      ],
    },
    {
      id: 'salary-resources',
      name: { zh: '薪资资源', en: 'Salary Resources' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Levels.fyi', en: 'Levels.fyi' },
          url: 'https://www.levels.fyi/',
          description: { zh: '大厂薪资透明数据', en: 'Tech salary transparency' },
          icon: 'https://www.google.com/s2/favicons?domain=levels.fyi&sz=64',
        },
      ],
    },
  ],
};
