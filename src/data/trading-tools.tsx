import { Category } from '../types';
import { RiCopperCoinLine } from 'react-icons/ri';

export const tradingTools: Category = {
  id: 'trading-tools',
  name: '链上工具',
  description: '交易工具与安全分析平台',
  icon: <RiCopperCoinLine className="text-lg" />,
  subcategories: [
    {
      id: 'dex-tools',
      name: '交易工具',
      description: 'DEX交易数据与分析工具',
      websites: [
        {
          name: 'Dex Screener',
          url: 'https://dexscreener.com/',
          description: '币圈必备神器，实时监控DEX代币价格，蹲点找百倍币',
          icon: 'https://www.google.com/s2/favicons?domain=dexscreener.com&sz=64',
        },
        {
          name: 'Dex Tools',
          url: 'https://www.dextools.io/',
          description: '专业级交易分析，比DexScreener功能更强，高手必备',
          icon: 'https://www.google.com/s2/favicons?domain=dextools.io&sz=64',
        },
        {
          name: 'GMGN',
          url: 'https://gmgn.ai/?ref=NtZl14CJ&chain=sol',
          description: '聪明钱追踪神器，跟着大佬吃肉看谁在抄底',
          icon: 'https://www.google.com/s2/favicons?domain=gmgn.ai&sz=64',
        },
        {
          name: 'Chain.fm',
          url: 'https://chain.fm/',
          description: '全链数据监控，设置链上事件提醒不错过信号',
          icon: 'https://www.google.com/s2/favicons?domain=chain.fm&sz=64',
        },
      ],
    },
    {
      id: 'security-bots',
      name: '安全与机器人',
      description: '安全检测与交易机器人',
      websites: [
        {
          name: 'Goplus',
          url: 'https://gopluslabs.io/token-security',
          description: '合约安全检测，防蜜罐防貔貅，散户保命工具',
          icon: 'https://www.google.com/s2/favicons?domain=gopluslabs.io&sz=64',
        },
        {
          name: 'Pepeboost Sol Bot',
          url: 'https://t.me/pepeboost_sol08_bot',
          description: 'SOL链自动交易机器人，抢新币套利必备',
          icon: 'https://www.google.com/s2/favicons?domain=t.me&sz=64',
        },
        {
          name: 'Arkham',
          url: 'https://platform.arkhamintelligence.com/',
          description: '地址标签大全，追踪巨鲸动向，链上侦探最爱',
          icon: 'https://www.google.com/s2/favicons?domain=platform.arkhamintelligence.com&sz=64',
        },
        {
          name: 'Debot',
          url: 'https://debot.ai/?inviteCode=211328',
          description: '智能交易机器人，自动化策略，让你睡觉也赚钱',
          icon: 'https://www.google.com/s2/favicons?domain=debot.ai&sz=64',
        },
      ],
    },
  ],
}; 