import { Category } from '../types';
import { RiGamepadLine } from 'react-icons/ri';

export const games: Category = {
  id: 'games',
  name: { zh: '游戏', en: 'Games' },
  description: { zh: '热门在线游戏平台', en: 'Popular online gaming platforms' },
  icon: <RiGamepadLine className="text-lg" />,
  subcategories: [
    {
      id: 'classic-retro',
      name: { zh: '经典怀旧', en: 'Classic & Retro' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: '游戏机实验室', en: 'Game Console Lab' },
          url: 'https://www.yikm.net/',
          description: { zh: '在线玩红白机、GBA经典游戏', en: 'Play NES, GBA classics online' },
          icon: 'https://www.google.com/s2/favicons?domain=yikm.net&sz=64',
        },
        {
          name: { zh: 'DOS Games Archive', en: 'DOS Games Archive' },
          url: 'https://dos.zone/',
          description: { zh: '红警仙剑等DOS经典在线玩', en: 'DOS classics online' },
          icon: 'https://www.google.com/s2/favicons?domain=dos.zone&sz=64',
        },
      ],
    },
    {
      id: 'casual-games',
      name: { zh: '休闲小游戏', en: 'Casual Games' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Poki', en: 'Poki' },
          url: 'https://poki.com/',
          description: { zh: '高质量无广告小游戏平台', en: 'Quality ad-free casual games' },
          icon: 'https://www.google.com/s2/favicons?domain=poki.com&sz=64',
        },
        {
          name: { zh: 'CrazyGames', en: 'CrazyGames' },
          url: 'https://www.crazygames.com/',
          description: { zh: '全球Top5小游戏平台', en: 'Top 5 casual games platform' },
          icon: 'https://www.google.com/s2/favicons?domain=crazygames.com&sz=64',
        },
      ],
    },
    {
      id: 'indie-creative',
      name: { zh: '独立创意', en: 'Indie & Creative' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'itch.io', en: 'itch.io' },
          url: 'https://itch.io/',
          description: { zh: '全球最大独立游戏平台', en: 'Largest indie game platform' },
          icon: 'https://www.google.com/s2/favicons?domain=itch.io&sz=64',
        },
        {
          name: { zh: 'Newgrounds', en: 'Newgrounds' },
          url: 'https://www.newgrounds.com/',
          description: { zh: '老牌创意游戏社区', en: 'Classic creative game community' },
          icon: 'https://www.google.com/s2/favicons?domain=newgrounds.com&sz=64',
        },
      ],
    },
    {
      id: 'multiplayer-online',
      name: { zh: '多人在线', en: 'Multiplayer Online' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Krunker.io', en: 'Krunker.io' },
          url: 'https://krunker.io/',
          description: { zh: '最火浏览器FPS射击游戏', en: 'Most popular browser FPS' },
          icon: 'https://www.google.com/s2/favicons?domain=krunker.io&sz=64',
        },
        {
          name: { zh: 'Skribbl.io', en: 'Skribbl.io' },
          url: 'https://skribbl.io/',
          description: { zh: '在线你画我猜派对游戏', en: 'Online drawing guessing game' },
          icon: 'https://www.google.com/s2/favicons?domain=skribbl.io&sz=64',
        },
        {
          name: { zh: 'Gartic Phone', en: 'Gartic Phone' },
          url: 'https://garticphone.com/',
          description: { zh: '传话筒+画画爆火派对游戏', en: 'Viral telephone drawing game' },
          icon: 'https://www.google.com/s2/favicons?domain=garticphone.com&sz=64',
        },
      ],
    },
    {
      id: 'puzzle-strategy',
      name: { zh: '益智策略', en: 'Puzzle & Strategy' },
      description: { zh: '', en: '' },
      websites: [
        {
          name: { zh: 'Lichess', en: 'Lichess' },
          url: 'https://lichess.org/',
          description: { zh: '最好的免费在线国际象棋', en: 'Best free online chess' },
          icon: 'https://www.google.com/s2/favicons?domain=lichess.org&sz=64',
        },
        {
          name: { zh: 'Geoguessr', en: 'Geoguessr' },
          url: 'https://www.geoguessr.com/',
          description: { zh: '地理位置猜谜游戏', en: 'Geography guessing game' },
          icon: 'https://www.google.com/s2/favicons?domain=geoguessr.com&sz=64',
        },
      ],
    },
  ],
};
