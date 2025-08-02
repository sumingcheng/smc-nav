// 定义不能添加到看板的只读分类
export const READONLY_CATEGORIES = [
] as const

// 判断分类是否为只读
export const isReadonlyCategory = (categoryId: string): boolean => {
  return READONLY_CATEGORIES.includes(categoryId as typeof READONLY_CATEGORIES[number])
} 