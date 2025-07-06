import * as Tooltip from '@radix-ui/react-tooltip';
import { Category } from '../types';
import WebsiteCard from './WebsiteCard';
import SectionContainer from './SectionContainer';

interface CryptoBloggersSectionProps {
  category: Category;
}

export default function CryptoBloggersSection({ category }: CryptoBloggersSectionProps) {
  // 合并所有博主到一个列表
  const allBloggers = category.subcategories.flatMap(subcategory => 
    subcategory.websites.map(website => ({ ...website, subcategory: subcategory.name }))
  );

  return (
    <Tooltip.Provider>
      <div className="space-y-3">
        <SectionContainer title="加密博主">
          {allBloggers.map((blogger, index) => (
            <WebsiteCard
              key={index}
              website={blogger}
              categoryId={category.id}
              isRounded={true}
            />
          ))}
        </SectionContainer>
      </div>
    </Tooltip.Provider>
  );
}
