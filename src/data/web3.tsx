import { Category } from '../types';
import { RiGlobalLine } from 'react-icons/ri';

export const web3: Category = {
  id: 'web3',
  name: { zh: 'WEB3', en: 'Crypto' },
  description: { zh: '区块链和Web3生态资源导航', en: 'Blockchain and Web3 ecosystem resources' },
  icon: <RiGlobalLine className="text-lg" />,
  subcategories: [
    {
      id: 'basic-crypto',
      name: { zh: '基础数据', en: 'Basic Data' },
      description: { zh: '基础数据查询平台', en: 'Basic data query platforms' },
      websites: [
        {
          name: { zh: 'CoinMarketCap', en: 'CoinMarketCap' },
          url: 'https://coinmarketcap.com',
          description: { zh: '最权威价格数据', en: 'Most authoritative price data' },
          icon: 'https://www.google.com/s2/favicons?domain=coinmarketcap.com&sz=64',
        },
        {
          name: { zh: 'CoinGecko', en: 'CoinGecko' },
          url: 'https://www.coingecko.com',
          description: { zh: '数据更全DeFi更详细', en: 'Comprehensive DeFi data' },
          icon: 'https://www.google.com/s2/favicons?domain=coingecko.com&sz=64',
        },
        {
          name: { zh: 'Crypto Bubbles', en: 'Crypto Bubbles' },
          url: 'https://cryptobubbles.net',
          description: { zh: '市场情绪可视化', en: 'Market sentiment visualizer' },
          icon: 'https://www.google.com/s2/favicons?domain=cryptobubbles.net&sz=64',
        },
      ],
    },
    {
      id: 'dex-tools',
      name: { zh: '交易工具', en: 'Trading Tools' },
      description: { zh: 'DEX交易数据与分析工具', en: 'DEX trading data and analysis tools' },
      websites: [
        {
          name: { zh: 'Dex Screener', en: 'Dex Screener' },
          url: 'https://dexscreener.com/',
          description: { zh: '实时DEX代币监控', en: 'Real-time DEX token tracking' },
          icon: 'https://www.google.com/s2/favicons?domain=dexscreener.com&sz=64',
        },
        {
          name: { zh: 'Dex Tools', en: 'Dex Tools' },
          url: 'https://www.dextools.io/',
          description: { zh: '专业级交易分析', en: 'Professional trading analysis' },
          icon: 'https://www.google.com/s2/favicons?domain=dextools.io&sz=64',
        },
        {
          name: { zh: 'GMGN', en: 'GMGN' },
          url: 'https://gmgn.ai/?ref=NtZl14CJ&chain=sol',
          description: { zh: '聪明钱追踪', en: 'Smart money tracker' },
          icon: 'https://www.google.com/s2/favicons?domain=gmgn.ai&sz=64',
        },
        {
          name: { zh: 'Chain.fm', en: 'Chain.fm' },
          url: 'https://chain.fm/',
          description: { zh: '全链数据监控', en: 'Multi-chain monitoring' },
          icon: 'https://www.google.com/s2/favicons?domain=chain.fm&sz=64',
        },
      ],
    },
    {
      id: 'security-bots',
      name: { zh: '安全与机器人', en: 'Security & Bots' },
      description: { zh: '安全检测与交易机器人', en: 'Security detection and trading bots' },
      websites: [
        {
          name: { zh: 'Goplus', en: 'Goplus' },
          url: 'https://gopluslabs.io/token-security',
          description: { zh: '合约安全检测', en: 'Contract security scanner' },
          icon: 'https://www.google.com/s2/favicons?domain=gopluslabs.io&sz=64',
        },
        {
          name: { zh: 'Pepeboost Sol Bot', en: 'Pepeboost Sol Bot' },
          url: 'https://t.me/pepeboost_sol08_bot',
          description: { zh: 'SOL自动交易机器人', en: 'SOL auto-trading bot' },
          icon: 'https://www.google.com/s2/favicons?domain=t.me&sz=64',
        },
        {
          name: { zh: 'Arkham', en: 'Arkham' },
          url: 'https://platform.arkhamintelligence.com/',
          description: { zh: '地址标签追踪巨鲸', en: 'Address labeling tracker' },
          icon: 'https://www.google.com/s2/favicons?domain=platform.arkhamintelligence.com&sz=64',
        },
        {
          name: { zh: 'Debot', en: 'Debot' },
          url: 'https://debot.ai/?inviteCode=211328',
          description: { zh: '智能交易机器人', en: 'Intelligent trading bot' },
          icon: 'https://www.google.com/s2/favicons?domain=debot.ai&sz=64',
        },
      ],
    },
    {
      id: 'advanced-data',
      name: { zh: '进阶数据', en: 'Advanced Data' },
      description: { zh: '深度数据分析工具', en: 'Deep data analysis tools' },
      websites: [
        {
          name: { zh: 'DefiLlama', en: 'DefiLlama' },
          url: 'https://defillama.com',
          description: { zh: 'DeFi数据分析王者', en: 'Leading DeFi analytics' },
          icon: 'https://www.google.com/s2/favicons?domain=defillama.com&sz=64',
        },
        {
          name: { zh: 'RootData', en: 'RootData' },
          url: 'https://www.rootdata.com',
          description: { zh: '项目背景调查', en: 'Project due diligence' },
          icon: 'https://www.google.com/s2/favicons?domain=rootdata.com&sz=64',
        },
        {
          name: { zh: 'Token Unlocks', en: 'Token Unlocks' },
          url: 'https://token.unlocks.app',
          description: { zh: '代币解锁时间表', en: 'Token unlock schedule' },
          icon: 'https://www.google.com/s2/favicons?domain=token.unlocks.app&sz=64',
        },
      ],
    },
    {
      id: 'data-dashboard',
      name: { zh: '数据面板', en: 'Data Dashboards' },
      description: { zh: '可视化数据分析面板', en: 'Visual data analysis dashboards' },
      websites: [
        {
          name: { zh: 'Dune', en: 'Dune' },
          url: 'https://dune.com',
          description: { zh: '链上数据分析神器', en: 'On-chain analytics platform' },
          icon: 'https://www.google.com/s2/favicons?domain=dune.com&sz=64',
        },
        {
          name: { zh: 'Footprint', en: 'Footprint' },
          url: 'https://www.footprint.network',
          description: { zh: '无代码数据分析', en: 'No-code analytics' },
          icon: 'https://www.google.com/s2/favicons?domain=footprint.network&sz=64',
        },
        {
          name: { zh: 'DappRadar', en: 'DappRadar' },
          url: 'https://dappradar.com',
          description: { zh: 'DApp数据统计', en: 'DApp stats platform' },
          icon: 'https://www.google.com/s2/favicons?domain=dappradar.com&sz=64',
        },
      ],
    },
    {
      id: 'comprehensive-news',
      name: { zh: '综合资讯', en: 'News & Media' },
      description: { zh: '全面的区块链新闻报道', en: 'Comprehensive blockchain news coverage' },
      websites: [
        {
          name: { zh: 'TechFlow 深潮', en: 'TechFlow' },
          url: 'https://techflow.app',
          description: { zh: '币圈深度报道', en: 'In-depth crypto journalism' },
          icon: 'https://www.google.com/s2/favicons?domain=techflow.app&sz=64',
        },
        {
          name: { zh: 'Foresight News', en: 'Foresight News' },
          url: 'https://foresightnews.pro',
          description: { zh: '前瞻性强的媒体', en: 'Forward-looking media' },
          icon: 'https://www.google.com/s2/favicons?domain=foresightnews.pro&sz=64',
        },
        {
          name: { zh: 'Odaily 星球日报', en: 'Odaily' },
          url: 'https://www.odaily.news',
          description: { zh: '老牌币圈媒体', en: 'Established crypto media' },
          icon: 'https://www.google.com/s2/favicons?domain=odaily.news&sz=64',
        },
      ],
    },
    {
      id: 'specialized-media',
      name: { zh: '专业媒体', en: 'Professional Media' },
      description: { zh: '专业深度的区块链媒体', en: 'Professional blockchain media outlets' },
      websites: [
        {
          name: { zh: 'BlockBeats', en: 'BlockBeats' },
          url: 'https://www.theblockbeats.info',
          description: { zh: '市场动态快讯', en: 'Market updates and news' },
          icon: 'https://www.google.com/s2/favicons?domain=theblockbeats.info&sz=64',
        },
        {
          name: { zh: 'PANews 中文新闻频道', en: 'PANews' },
          url: 'https://www.panewslab.com',
          description: { zh: '专业区块链新闻', en: 'Professional blockchain news' },
          icon: 'https://www.google.com/s2/favicons?domain=panewslab.com&sz=64',
        },
        {
          name: { zh: '吴说区块链', en: 'Wu Blockchain' },
          url: 'https://www.wu-talk.com',
          description: { zh: '币圈影响力大独家爆料', en: 'Influential crypto news' },
          icon: 'https://www.google.com/s2/favicons?domain=wu-talk.com&sz=64',
        },
      ],
    },
    {
      id: 'beginner-guide',
      name: { zh: '链上入门', en: 'Beginner Guide' },
      description: { zh: '区块链基础知识教程', en: 'Blockchain basics and tutorials' },
      websites: [
        {
          name: { zh: '从二级到链上（入门指南）', en: 'Trading to On-Chain Guide' },
          url: 'https://threadreaderapp.com/thread/1854423667842953534.html',
          description: { zh: '区块链入门指南', en: 'Blockchain beginner guide' },
          icon: 'https://www.google.com/s2/favicons?domain=threadreaderapp.com&sz=64',
        },
        {
          name: { zh: '链上交易系列课程', en: 'On-Chain Trading Course' },
          url: 'https://www.youtube.com/@cryptokris666/playlists',
          description: { zh: '链上交易教程', en: 'On-chain trading tutorials' },
          icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64',
        },
        {
          name: { zh: 'Web3 101', en: 'Web3 101' },
          url: 'https://www.youtube.com/@Web3101cast',
          description: { zh: 'Web3基础科普', en: 'Web3 fundamentals' },
          icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64',
        },
        {
          name: { zh: 'Blockchain 学习路线图', en: 'Blockchain Roadmap' },
          url: 'https://roadmap.sh/blockchain',
          description: { zh: '区块链开发学习路径', en: 'Blockchain dev roadmap' },
          icon: 'https://www.google.com/s2/favicons?domain=roadmap.sh&sz=64',
        },
      ],
    },
    {
      id: 'chain-games',
      name: { zh: '链游', en: 'Chain Games' },
      description: { zh: '区块链游戏与GameFi项目', en: 'Blockchain games and GameFi projects' },
      websites: [
        {
          name: { zh: 'The Beacon', en: 'The Beacon' },
          url: 'https://app.thebeacon.gg/',
          description: { zh: '区块链游戏平台', en: 'Blockchain gaming platform' },
          icon: 'https://www.google.com/s2/favicons?domain=thebeacon.gg&sz=64',
        },
      ],
    },
  ],
};
