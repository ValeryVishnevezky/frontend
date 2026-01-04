import { Product, ProductFilter } from '@/types/Product'
import { httpService } from './http.service'

const BASE_URL = 'orders'

export async function query(filterBy: ProductFilter = {}) {
	return httpService.get(BASE_URL, filterBy)
}

export async function getById(orderId: string) {
	return httpService.get(`${BASE_URL}/${orderId}`)
}

export async function remove(orderId: string) {
	return httpService.delete(`${BASE_URL}/${orderId}`)
}

export async function save(order: Product) {
	const url = order._id ? `${BASE_URL}/${order._id}` : BASE_URL
	const method = order._id ? 'put' : 'post'
	return httpService[method](url, order)
}
