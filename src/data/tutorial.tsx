import { Category } from '../types';
import { RiGraduationCapLine } from 'react-icons/ri';

export const tutorial: Category = {
  id: 'tutorial',
  name: '新手教程',
  description: '区块链新手入门教程',
  icon: <RiGraduationCapLine className="text-lg" />,
  subcategories: [
    {
      id: 'beginner-guide',
      name: '链上入门',
      description: '区块链基础知识教程',
      websites: [
        {
          name: '从二级到链上（入门指南）',
          url: 'https://threadreaderapp.com/thread/1854423667842953534.html',
          description: '全面的区块链入门指南，从基础概念到实际操作',
          icon: 'https://www.google.com/s2/favicons?domain=threadreaderapp.com&sz=64',
        },
        {
          name: '链上交易系列课程',
          url: 'https://www.youtube.com/@cryptokris666/playlists',
          description: '专业的链上交易教程，从入门到精通',
          icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64',
        },
        {
          name: 'Web3 101',
          url: 'https://www.youtube.com/@Web3101cast',
          description: 'Web3基础知识科普，适合零基础用户',
          icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64',
        },
        {
          name: 'Blockchain 学习路线图',
          url: 'https://roadmap.sh/blockchain',
          description: '完整的区块链开发学习路径，从入门到专业开发者',
          icon: 'https://www.google.com/s2/favicons?domain=roadmap.sh&sz=64',
        },
      ],
    },
  ],
}; 