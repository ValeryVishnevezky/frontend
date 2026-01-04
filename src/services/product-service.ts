import { Product, ProductFilter } from '@/types/Product'
import { httpService } from './http.service'

const BASE_URL = 'products'

export async function query(filterBy: ProductFilter = {}) {
	return httpService.get(BASE_URL, filterBy)
}

export async function getById(productId: string) {
	return httpService.get(`${BASE_URL}/${productId}`)
}

export async function remove(productId: string) {
	return httpService.delete(`${BASE_URL}/${productId}`)
}

export async function save(product: Product) {
	const url = product._id ? `${BASE_URL}/${product._id}` : BASE_URL
	const method = product._id ? 'put' : 'post'
	return httpService[method](url, product)
}
