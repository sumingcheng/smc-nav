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
          description: { zh: '在线玩红白机、GBA等经典游戏，无需下载和安装', en: 'Play classic NES, GBA games online, no download or installation required' },
          icon: 'https://www.google.com/s2/favicons?domain=yikm.net&sz=64',
        },
        {
          name: { zh: 'DOS Games Archive', en: 'DOS Games Archive' },
          url: 'https://dos.zone/',
          description: { zh: '经典DOS游戏在线玩，红警、仙剑等怀旧党最爱', en: 'Play classic DOS games like Red Alert and Chinese Paladin online' },
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
          description: { zh: '月活千万级小游戏平台，质量高无广告体验好', en: 'High-quality casual games platform with millions of monthly users, ad-free experience' },
          icon: 'https://www.google.com/s2/favicons?domain=poki.com&sz=64',
        },
        {
          name: { zh: 'CrazyGames', en: 'CrazyGames' },
          url: 'https://www.crazygames.com/',
          description: { zh: '全球Top5小游戏平台，HTML5游戏品类丰富', en: 'Top 5 global casual games platform with rich HTML5 game categories' },
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
          description: { zh: '全球最大独立游戏平台，几十万款创意游戏任你挑', en: 'World\'s largest indie game platform with hundreds of thousands of creative games' },
          icon: 'https://www.google.com/s2/favicons?domain=itch.io&sz=64',
        },
        {
          name: { zh: 'Newgrounds', en: 'Newgrounds' },
          url: 'https://www.newgrounds.com/',
          description: { zh: '老牌创意游戏社区，FNF等爆款游戏的诞生地', en: 'Classic creative game community, birthplace of viral hits like FNF' },
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
          description: { zh: '最火的浏览器FPS射击游戏，玩家超千万', en: 'Most popular browser-based FPS with over 10 million players' },
          icon: 'https://www.google.com/s2/favicons?domain=krunker.io&sz=64',
        },
        {
          name: { zh: 'Skribbl.io', en: 'Skribbl.io' },
          url: 'https://skribbl.io/',
          description: { zh: '在线你画我猜，直播圈很火的派对游戏', en: 'Online drawing and guessing game, popular in streaming communities' },
          icon: 'https://www.google.com/s2/favicons?domain=skribbl.io&sz=64',
        },
        {
          name: { zh: 'Gartic Phone', en: 'Gartic Phone' },
          url: 'https://garticphone.com/',
          description: { zh: '传话筒+画画结合，爆火的派对游戏', en: 'Viral party game combining telephone and drawing' },
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
          description: { zh: '最好的免费在线国际象棋平台，注册用户千万级', en: 'Best free online chess platform with millions of registered users' },
          icon: 'https://www.google.com/s2/favicons?domain=lichess.org&sz=64',
        },
        {
          name: { zh: 'Geoguessr', en: 'Geoguessr' },
          url: 'https://www.geoguessr.com/',
          description: { zh: '地理位置猜谜游戏，B站抖音主播都在玩', en: 'Geography guessing game popular among streamers on Bilibili and TikTok' },
          icon: 'https://www.google.com/s2/favicons?domain=geoguessr.com&sz=64',
        },
      ],
    },
  ],
};
