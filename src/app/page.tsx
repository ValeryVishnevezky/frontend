import ProductList from '@/components/ui/ProductList'
import { getProducts } from '@/services/product-service'
import { Product } from '@/types/product'

export default async function ProductsIndex() {
	const products: Product[] = await getProducts()
	// const products: Product[] = null

	if (!products || products.length === 0) {
		return (
			<div className='empty-container'>
				<div className='list-empty'>
					<div className='list-empty-icon'>🛒</div>
					<h2 className='list-empty-title'>No Products Found</h2>
					<p className='list-empty-message'>There are no products to display at this time.</p>
				</div>
			</div>
		)
	}
	return (
		<div className='products-container w-full py-8'>
			<ProductList products={products} />
		</div>
	)
}
