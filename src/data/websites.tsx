import { Category } from '../types';
import { RiDashboard3Line, RiBarChart2Line, RiNewspaperLine, RiCopperCoinLine, RiUser3Line, RiGraduationCapLine } from 'react-icons/ri';

// 网站数据 - 直接使用币圈老游子的描述
export const categories: Category[] = [
  {
    id: 'dashboard',
    name: '看板',
    description: '自定义自己的导航看板',
    icon: <RiDashboard3Line className="text-lg" />,
    subcategories: [], // 看板不需要子分类
  },
  {
    id: 'tutorial',
    name: '新手教程',
    description: '区块链新手入门教程',
    icon: <RiGraduationCapLine className="text-lg" />,
    subcategories: [
      {
        id: 'beginner-guide',
        name: '入门指南',
        description: '区块链基础知识教程',
        websites: [
          {
            name: '从二级到链上（入门指南）',
            url: 'https://threadreaderapp.com/thread/1854423667842953534.html',
            description: '全面的区块链入门指南，从基础概念到实际操作',
            icon: 'https://www.google.com/s2/favicons?domain=threadreaderapp.com&sz=64',
          },
          {
            name: '链上交易系列课程',
            url: 'https://www.youtube.com/@cryptokris666/playlists',
            description: '专业的链上交易教程，从入门到精通',
            icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64',
          },
          {
            name: 'Web3 101',
            url: 'https://www.youtube.com/@Web3101cast',
            description: 'Web3基础知识科普，适合零基础用户',
            icon: 'https://www.google.com/s2/favicons?domain=youtube.com&sz=64',
          },
        ],
      },
    ],
  },
  {
    id: 'chain-data',
    name: '链上数据',
    description: '区块链数据分析平台',
    icon: <RiBarChart2Line className="text-lg" />,
    subcategories: [
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
  },
  {
    id: 'news-media',
    name: '新闻媒体',
    description: '区块链新闻与资讯平台',
    icon: <RiNewspaperLine className="text-lg" />,
    subcategories: [
      {
        id: 'comprehensive',
        name: '综合资讯',
        description: '全面的区块链新闻报道',
        websites: [
          {
            name: 'TechFlow 深潮',
            url: 'https://techflow.app',
            description: '币圈深度报道扛把子，专挖行业内幕和黑幕',
            icon: 'https://www.google.com/s2/favicons?domain=techflow.app&sz=64',
          },
          {
            name: 'Foresight News',
            url: 'https://foresightnews.pro',
            description: '前瞻性很强的媒体，经常能提前报道重要消息',
            icon: 'https://www.google.com/s2/favicons?domain=foresightnews.pro&sz=64',
          },
          {
            name: 'Odaily 星球日报',
            url: 'https://www.odaily.news',
            description: '老牌币圈媒体，消息可靠，币圈人日常刷新闻首选',
            icon: 'https://www.google.com/s2/favicons?domain=odaily.news&sz=64',
          },
        ],
      },
      {
        id: 'specialized',
        name: '专业媒体',
        description: '专业深度的区块链媒体',
        websites: [
          {
            name: 'BlockBeats',
            url: 'https://www.theblockbeats.info',
            description: '专注市场动态，快讯及时，短线交易者必备信息源',
            icon: 'https://www.google.com/s2/favicons?domain=theblockbeats.info&sz=64',
          },
          {
            name: 'PANews 中文新闻频道',
            url: 'https://www.panewslab.com',
            description: '专业区块链新闻，报道客观中立，深度分析质量高',
            icon: 'https://www.google.com/s2/favicons?domain=panewslab.com&sz=64',
          },
          {
            name: '吴说区块链',
            url: 'https://www.wu-talk.com',
            description: '吴忌寒创办，币圈影响力大，独家爆料和深度调查',
            icon: 'https://www.google.com/s2/favicons?domain=wu-talk.com&sz=64',
          },
        ],
      },
    ],
  },
  {
    id: 'trading-tools',
    name: '打狗',
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
  },
  {
    id: 'crypto-bloggers',
    name: '加密博主',
    description: '知名加密货币博主和意见领袖',
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
  },
]; 