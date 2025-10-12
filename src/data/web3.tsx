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
          description: { zh: '币圈入门必备，最权威的价格数据源，老韭菜都在用', en: 'Essential crypto data source, most authoritative price data' },
          icon: 'https://www.google.com/s2/favicons?domain=coinmarketcap.com&sz=64',
        },
        {
          name: { zh: 'CoinGecko', en: 'CoinGecko' },
          url: 'https://www.coingecko.com',
          description: { zh: 'CMC的最强竞争对手，数据更全面，DeFi数据更详细', en: 'CMC competitor with comprehensive data and detailed DeFi metrics' },
          icon: 'https://www.google.com/s2/favicons?domain=coingecko.com&sz=64',
        },
        {
          name: { zh: 'Crypto Bubbles', en: 'Crypto Bubbles' },
          url: 'https://cryptobubbles.net',
          description: { zh: '市场情绪可视化神器，泡沫图看涨跌一目了然', en: 'Market sentiment visualizer, bubble chart for price movements' },
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
          description: { zh: '币圈必备神器，实时监控DEX代币价格，蹲点找百倍币', en: 'Essential tool for real-time DEX token price monitoring' },
          icon: 'https://www.google.com/s2/favicons?domain=dexscreener.com&sz=64',
        },
        {
          name: { zh: 'Dex Tools', en: 'Dex Tools' },
          url: 'https://www.dextools.io/',
          description: { zh: '专业级交易分析，比DexScreener功能更强，高手必备', en: 'Professional trading analysis with advanced features' },
          icon: 'https://www.google.com/s2/favicons?domain=dextools.io&sz=64',
        },
        {
          name: { zh: 'GMGN', en: 'GMGN' },
          url: 'https://gmgn.ai/?ref=NtZl14CJ&chain=sol',
          description: { zh: '聪明钱追踪神器，跟着大佬吃肉看谁在抄底', en: 'Smart money tracker to follow whale activities' },
          icon: 'https://www.google.com/s2/favicons?domain=gmgn.ai&sz=64',
        },
        {
          name: { zh: 'Chain.fm', en: 'Chain.fm' },
          url: 'https://chain.fm/',
          description: { zh: '全链数据监控，设置链上事件提醒不错过信号', en: 'Multi-chain monitoring with on-chain event alerts' },
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
          description: { zh: '合约安全检测，防蜜罐防貔貅，散户保命工具', en: 'Contract security scanner, essential safety tool' },
          icon: 'https://www.google.com/s2/favicons?domain=gopluslabs.io&sz=64',
        },
        {
          name: { zh: 'Pepeboost Sol Bot', en: 'Pepeboost Sol Bot' },
          url: 'https://t.me/pepeboost_sol08_bot',
          description: { zh: 'SOL链自动交易机器人，抢新币套利必备', en: 'SOL auto-trading bot for new token sniping' },
          icon: 'https://www.google.com/s2/favicons?domain=t.me&sz=64',
        },
        {
          name: { zh: 'Arkham', en: 'Arkham' },
          url: 'https://platform.arkhamintelligence.com/',
          description: { zh: '地址标签大全，追踪巨鲸动向，链上侦探最爱', en: 'Address labeling platform for tracking whale movements' },
          icon: 'https://www.google.com/s2/favicons?domain=platform.arkhamintelligence.com&sz=64',
        },
        {
          name: { zh: 'Debot', en: 'Debot' },
          url: 'https://debot.ai/?inviteCode=211328',
          description: { zh: '智能交易机器人，自动化策略，让你睡觉也赚钱', en: 'Intelligent trading bot with automated strategies' },
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
          description: { zh: 'DeFi数据分析王者，TVL和收益率对比必备工具', en: 'Leading DeFi analytics for TVL and yield comparison' },
          icon: 'https://www.google.com/s2/favicons?domain=defillama.com&sz=64',
        },
        {
          name: { zh: 'RootData', en: 'RootData' },
          url: 'https://www.rootdata.com',
          description: { zh: '项目背景调查专家，买币前查查项目靠不靠谱', en: 'Project due diligence platform for crypto investments' },
          icon: 'https://www.google.com/s2/favicons?domain=rootdata.com&sz=64',
        },
        {
          name: { zh: 'Token Unlocks', en: 'Token Unlocks' },
          url: 'https://token.unlocks.app',
          description: { zh: '代币解锁时间表，防止被大量解锁砸盘', en: 'Token unlock schedule to avoid dump risks' },
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
          description: { zh: '链上数据分析神器，专业投资者都在用的图表平台', en: 'On-chain analytics platform used by professional investors' },
          icon: 'https://www.google.com/s2/favicons?domain=dune.com&sz=64',
        },
        {
          name: { zh: 'Footprint', en: 'Footprint' },
          url: 'https://www.footprint.network',
          description: { zh: '无代码数据分析，不懂技术也能做链上分析', en: 'No-code analytics for non-technical users' },
          icon: 'https://www.google.com/s2/favicons?domain=footprint.network&sz=64',
        },
        {
          name: { zh: 'DappRadar', en: 'DappRadar' },
          url: 'https://dappradar.com',
          description: { zh: 'DApp数据统计平台，看哪些应用最火跟热度走', en: 'DApp stats platform to track trending applications' },
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
          description: { zh: '币圈深度报道扛把子，专挖行业内幕和黑幕', en: 'In-depth crypto journalism and industry insights' },
          icon: 'https://www.google.com/s2/favicons?domain=techflow.app&sz=64',
        },
        {
          name: { zh: 'Foresight News', en: 'Foresight News' },
          url: 'https://foresightnews.pro',
          description: { zh: '前瞻性很强的媒体，经常能提前报道重要消息', en: 'Forward-looking media with early breaking news' },
          icon: 'https://www.google.com/s2/favicons?domain=foresightnews.pro&sz=64',
        },
        {
          name: { zh: 'Odaily 星球日报', en: 'Odaily' },
          url: 'https://www.odaily.news',
          description: { zh: '老牌币圈媒体，消息可靠，币圈人日常刷新闻首选', en: 'Established crypto media with reliable news coverage' },
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
          description: { zh: '专注市场动态，快讯及时，短线交易者必备信息源', en: 'Market updates and breaking news for traders' },
          icon: 'https://www.google.com/s2/favicons?domain=theblockbeats.info&sz=64',
        },
        {
          name: { zh: 'PANews 中文新闻频道', en: 'PANews' },
          url: 'https://www.panewslab.com',
          description: { zh: '专业区块链新闻，报道客观中立，深度分析质量高', en: 'Professional blockchain news with objective reporting' },
          icon: 'https://www.google.com/s2/favicons?domain=panewslab.com&sz=64',
        },
        {
          name: { zh: '吴说区块链', en: 'Wu Blockchain' },
          url: 'https://www.wu-talk.com',
          description: { zh: '吴忌寒创办，币圈影响力大，独家爆料和深度调查', en: 'Influential crypto news with exclusive stories and investigations' },
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
          description: { zh: '全面的区块链入门指南，从基础概念到实际操作', en: 'Comprehensive blockchain guide from basics to practice' },
          icon: 'https://www.google.com/s2/favicons?domain=threadreaderapp.com&sz=64',
        },
        {
          name: { zh: '链上交易系列课程', en: 'On-Chain Trading Course' },
          url: 'https://www.youtube.com/@cryptokris666/playlists',
          description: { zh: '专业的链上交易教程，从入门到精通', en: 'Professional on-chain trading tutorials from beginner to advanced' },
          icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64',
        },
        {
          name: { zh: 'Web3 101', en: 'Web3 101' },
          url: 'https://www.youtube.com/@Web3101cast',
          description: { zh: 'Web3基础知识科普，适合零基础用户', en: 'Web3 fundamentals for complete beginners' },
          icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64',
        },
        {
          name: { zh: 'Blockchain 学习路线图', en: 'Blockchain Roadmap' },
          url: 'https://roadmap.sh/blockchain',
          description: { zh: '完整的区块链开发学习路径，从入门到专业开发者', en: 'Complete blockchain development learning path' },
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
          description: { zh: '区块链游戏平台，提供多种链游体验', en: 'Blockchain gaming platform with multiple game experiences' },
          icon: 'https://www.google.com/s2/favicons?domain=thebeacon.gg&sz=64',
        },
      ],
    },
  ],
};
