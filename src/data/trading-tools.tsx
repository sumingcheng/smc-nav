import { Category } from '../types';
import { RiCopperCoinLine } from 'react-icons/ri';

export const tradingTools: Category = {
  id: 'trading-tools',
  name: '交易工具',
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
    {
      id: 'basic',
      name: '基础',
      description: '基础数据查询平台',
      websites: [
        {
          name: 'CoinMarketCap',
          url: 'https://coinmarketcap.com',
          description: '币圈入门必备，最权威的价格数据源，老韭菜都在用',
          icon: 'https://www.google.com/s2/favicons?domain=coinmarketcap.com&sz=64',
        },
        {
          name: 'CoinGecko',
          url: 'https://www.coingecko.com',
          description: 'CMC的最强竞争对手，数据更全面，DeFi数据更详细',
          icon: 'https://www.google.com/s2/favicons?domain=coingecko.com&sz=64',
        },
        {
          name: 'Crypto Bubbles',
          url: 'https://cryptobubbles.net',
          description: '市场情绪可视化神器，泡沫图看涨跌一目了然',
          icon: 'https://www.google.com/s2/favicons?domain=cryptobubbles.net&sz=64',
        },
      ],
    },
    {
      id: 'advanced',
      name: '进阶',
      description: '深度数据分析工具',
      websites: [
        {
          name: 'DefiLlama',
          url: 'https://defillama.com',
          description: 'DeFi数据分析王者，TVL和收益率对比必备工具',
          icon: 'https://www.google.com/s2/favicons?domain=defillama.com&sz=64',
        },
        {
          name: 'RootData',
          url: 'https://www.rootdata.com',
          description: '项目背景调查专家，买币前查查项目靠不靠谱',
          icon: 'https://www.google.com/s2/favicons?domain=rootdata.com&sz=64',
        },
        {
          name: 'Token Unlocks',
          url: 'https://token.unlocks.app',
          description: '代币解锁时间表，防止被大量解锁砸盘',
          icon: 'https://www.google.com/s2/favicons?domain=token.unlocks.app&sz=64',
        },
      ],
    },
    {
      id: 'data-dashboard',
      name: '数据面板',
      description: '可视化数据分析面板',
      websites: [
        {
          name: 'Dune',
          url: 'https://dune.com',
          description: '链上数据分析神器，专业投资者都在用的图表平台',
          icon: 'https://www.google.com/s2/favicons?domain=dune.com&sz=64',
        },
        {
          name: 'Footprint',
          url: 'https://www.footprint.network',
          description: '无代码数据分析，不懂技术也能做链上分析',
          icon: 'https://www.google.com/s2/favicons?domain=footprint.network&sz=64',
        },
        {
          name: 'DappRadar',
          url: 'https://dappradar.com',
          description: 'DApp数据统计平台，看哪些应用最火跟热度走',
          icon: 'https://www.google.com/s2/favicons?domain=dappradar.com&sz=64',
        },
      ],
    },
  ],
}; 