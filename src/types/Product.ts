export type Product = {
	_id: string
	name: string
	price: number
	category: string
	inStock: boolean
	createdAt: string
	imgUrl?: string | null
}

export type ProductProps = {
	product: Product
}
