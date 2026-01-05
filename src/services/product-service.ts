import { Product, ProductFilter } from '@/types/product'
import { remove, get, post, put } from './http.service'

const BASE_URL = 'products'

export async function getProducts(filterBy: ProductFilter = {}): Promise<Product[]> {
	return get<Product[]>(BASE_URL, filterBy)
}

export async function getProductById(productId: string): Promise<Product> {
	return get<Product>(`${BASE_URL}/${productId}`)
}

export async function deleteProduct(productId: string) {
	return remove(`${BASE_URL}/${productId}`)
}

export async function saveProduct(product: Product): Promise<Product> {
	const url = product._id ? `${BASE_URL}/${product._id}` : BASE_URL
	const method = product._id ? put : post
	return method<Product>(url, product)
}
