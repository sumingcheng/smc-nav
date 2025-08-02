import { Category } from '../types';
import { RiGamepadLine } from 'react-icons/ri';

export const games: Category = {
  id: 'games',
  name: '游戏',
  description: '精选区块链与Web3游戏',
  icon: <RiGamepadLine className="text-lg" />,
  subcategories: [
    {
      id: 'strategy-games',
      name: '策略游戏',
      description: '老红警，新玩法',
      websites: [
        {
          name: 'Chrono Divide',
          url: 'https://game.chronodivide.com/',
          description: '浏览器可以直接玩，无需下载，真离谱啊',
          icon: 'https://www.google.com/s2/favicons?domain=chronodivide.com&sz=64',
        },
        {
          name: '游戏机实验室',
          url: 'https://www.yikm.net/',
          description: '在线玩红白机、GBA等经典游戏，无需下载和安装',
          icon: 'https://www.google.com/s2/favicons?domain=yikm.net&sz=64',
        },
      ],
    },
  ],
};
