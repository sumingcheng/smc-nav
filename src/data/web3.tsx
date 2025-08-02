import { Category } from '../types';
import { RiGlobalLine } from 'react-icons/ri';

export const web3: Category = {
  id: 'web3',
  name: 'WEB3',
  description: '区块链和Web3生态资源导航',
  icon: <RiGlobalLine className="text-lg" />,
  subcategories: [
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
      ],
    },
  ],
};
