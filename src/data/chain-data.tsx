import { Category } from '../types';
import { RiBarChart2Line } from 'react-icons/ri';

export const chainData: Category = {
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
}; 