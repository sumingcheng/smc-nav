import { Category } from '../types';
import { RiGamepadLine } from 'react-icons/ri';

export const games: Category = {
  id: 'games',
  name: { zh: '游戏', en: 'Games' },
  description: { zh: '精选区块链与Web3游戏', en: 'Featured blockchain and Web3 games' },
  icon: <RiGamepadLine className="text-lg" />,
  subcategories: [
    {
      id: 'strategy-games',
      name: { zh: '策略游戏', en: 'Strategy Games' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Chrono Divide', en: 'Chrono Divide' },
          url: 'https://game.chronodivide.com/',
          description: { zh: '浏览器可以直接玩，无需下载，真离谱啊', en: 'Play directly in browser, no download required, amazing!' },
          icon: 'https://www.google.com/s2/favicons?domain=chronodivide.com&sz=64',
        },
        {
          name: { zh: '游戏机实验室', en: 'Game Console Lab' },
          url: 'https://www.yikm.net/',
          description: { zh: '在线玩红白机、GBA等经典游戏，无需下载和安装', en: 'Play classic NES, GBA games online, no download or installation required' },
          icon: 'https://www.google.com/s2/favicons?domain=yikm.net&sz=64',
        },
      ],
    },
  ],
};
