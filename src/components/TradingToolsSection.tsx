import * as Tooltip from '@radix-ui/react-tooltip';
import { Category } from '../types';
import WebsiteCard from './WebsiteCard';
import SectionContainer from './SectionContainer';

interface TradingToolsSectionProps {
  category: Category;
}

export default function TradingToolsSection({ category }: TradingToolsSectionProps) {
  // 合并所有网站到一个列表
  const allWebsites = category.subcategories.flatMap((subcategory) => subcategory.websites.map((website) => ({ ...website, subcategory: subcategory.name })));

  return (
    <Tooltip.Provider>
      <div className="space-y-3">
        <SectionContainer title="交易工具">
          {allWebsites.map((website, index) => (
            <WebsiteCard key={index} website={website} categoryId={category.id} />
          ))}
        </SectionContainer>
      </div>
    </Tooltip.Provider>
  );
}
