import productData from './productData'

const { data, categories } = productData

export interface PaginatedProducts {
  products: typeof data
  hasMore: boolean
  total: number
  page: number
}

export function getProducts(page: number = 1, limit: number = 12): PaginatedProducts {
  const start = (page - 1) * limit
  const end = start + limit
  
  return {
    products: data.slice(start, end),
    hasMore: end < data.length,
    total: data.length,
    page
  }
}

export function getProductById(id: number) {
  return data.find(product => product.id === id)
}

export function getFilteredProducts(filters: string[], page: number = 1, limit: number = 12) {
  if (filters.length === 0) return getProducts(page, limit)
  
  const filtered = data.filter((item) => {
    const text = `${item.name} ${item.title} ${item.disc}`.toLowerCase()
    const catCategory = item.cat?.category?.toLowerCase() || ""
    const catSub = item.cat?.subCategory?.toLowerCase() || ""
    
    return filters.some((filter) => {
      const f = filter.toLowerCase()
      return text.includes(f) || catCategory.includes(f) || catSub.includes(f)
    })
  })
  
  const start = (page - 1) * limit
  const end = start + limit
  
  return {
    products: filtered.slice(start, end),
    hasMore: end < filtered.length,
    total: filtered.length,
    page
  }
}

export { categories }