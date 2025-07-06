import { Category } from '../types';
import { RiUser3Line } from 'react-icons/ri';

export const cryptoBloggers: Category = {
  id: 'crypto-bloggers',
  name: 'KOL',
  description: '知名加密圈KOL',
  icon: <RiUser3Line className="text-lg" />,
  subcategories: [
    {
      id: 'chinese-bloggers',
      name: '中文博主',
      description: '知名中文加密货币博主',
      websites: [
        {
          name: '0xSun',
          url: 'https://x.com/0xSunNFT',
          description: '链上皇，NFT教父级人物，蓝筹嗅觉一绝',
          icon: 'https://pbs.twimg.com/profile_images/1592832730415472640/7jlzEaWz_400x400.jpg',
        },
        {
          name: 'LaserCAT397.eth',
          url: 'https://x.com/BitCloutCat',
          description: '激光猫，DeFi挖矿老司机，总能提前发现金矿',
          icon: 'https://pbs.twimg.com/profile_images/1844055062976860161/PvCjKPul_400x400.jpg',
        },
        {
          name: 'magnolia',
          url: 'https://x.com/0xmagnolia',
          description: '木兰姐，币圈女神级分析师，理性投资代表',
          icon: 'https://pbs.twimg.com/profile_images/1775518825652588544/LBkOFWyB_400x400.jpg',
        },
      ],
    },
    {
      id: 'analysts',
      name: '分析师',
      description: '知名加密货币分析师和研究员',
      websites: [
        {
          name: 'Neso',
          url: 'https://x.com/neso',
          description: '技术分析大神，看图说话准得吓人',
          icon: 'https://pbs.twimg.com/profile_images/1509550297094422537/7ZH_pFXl_400x400.jpg',
        },
        {
          name: '李平|ddd.eth',
          url: 'https://x.com/liping007',
          description: '老李，币圈人脉王，内幕消息满天飞',
          icon: 'https://pbs.twimg.com/profile_images/1705949062388998144/4rRhcjhx_400x400.jpg',
        },
      ],
    },
  ],
};
