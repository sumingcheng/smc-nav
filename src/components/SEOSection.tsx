import * as Tooltip from '@radix-ui/react-tooltip';
import { Category } from '../types';
import WebsiteCard from './WebsiteCard';

interface SEOSectionProps {
  category: Category;
}

export default function SEOSection({ category }: SEOSectionProps) {
  return (
    <Tooltip.Provider>
      <div className="space-y-3">
        {category.subcategories.map((subcategory) => (
          <div key={subcategory.id} className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-white/20 transition-all duration-200">
            {/* 子分类标题 */}
            <div className="mb-3">
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-1 h-1 bg-white rounded-full" />
                <h3 className="text-sm font-medium text-white">{subcategory.name}</h3>
              </div>
              <p className="text-xs text-[#a0a0a0] ml-3">{subcategory.description}</p>
            </div>

            {/* 网站列表 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
              {subcategory.websites.map((website, index) => (
                <WebsiteCard key={index} website={website} categoryId={category.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Tooltip.Provider>
  );
}