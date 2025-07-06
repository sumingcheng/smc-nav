import { Category } from '../types';
import { RiNewspaperLine } from 'react-icons/ri';

export const newsMedia: Category = {
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
}; 