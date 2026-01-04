export interface ProductInfo {
	_id: string
	name: string
	price: number
	category: string
	imgUrl?: string
}

export interface CustomerInfo {
	_id: string
	username: string
	email: string
}

export interface Order {
	_id: any
	product: ProductInfo
	customer: CustomerInfo
	status: string
	quantity: number
	totalPrice: number
	createdAt: Date
}

export type OrderProps = {
	order: Order
}