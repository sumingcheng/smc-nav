import { Category } from '../types';
import { RiCoinLine } from 'react-icons/ri';

export const airdrop: Category = {
  id: 'airdrop',
  name: '空投撸白',
  description: '空投机会与白名单项目汇总',
  icon: <RiCoinLine className="text-lg" />,
  subcategories: [
    {
      id: 'chain-games',
      name: '链游',
      description: '区块链游戏与GameFi项目',
      websites: [
        {
          name: 'The Beacon',
          url: 'https://app.thebeacon.gg/',
          description: '区块链游戏平台，提供多种链游体验',
          icon: 'https://www.google.com/s2/favicons?domain=thebeacon.gg&sz=64',
        },
      ],
    },
  ],
};