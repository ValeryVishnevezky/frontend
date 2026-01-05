export type Product = {
	_id: string
	name: string
	price: number
	category: string
	inStock: boolean
	createdAt: string
	imgUrl?: string | null
}

export interface ProductFilter {
	txt?: string
	minPrice?: number
	maxPrice?: number
	category?: string
	inStock?: string
	[key: string]: string | number | boolean | object | undefined
}
