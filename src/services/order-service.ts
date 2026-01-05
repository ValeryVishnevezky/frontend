import { Product, ProductFilter } from '@/types/product'
import { get, post, put, remove } from './http.service'
import { Order } from '@/types/order'

const BASE_URL = 'orders'

export async function getOrders(): Promise<Order[]> {
	return get<Order[]>(BASE_URL)
}

export async function getOrderById(orderId: string): Promise<Order> {
	return get<Order>(`${BASE_URL}/${orderId}`)
}

export async function deleteOrder(orderId: string) {
	return remove(`${BASE_URL}/${orderId}`)
}

export async function saveOrder(order: Order): Promise<Order> {
	const url = order._id ? `${BASE_URL}/${order._id}` : BASE_URL
	const method = order._id ? put : post
	return method<Order>(url, order)
}
