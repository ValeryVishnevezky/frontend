import ProductList from '@/components/ui/ProductList'
import { query } from '@/services/product-service'
import { Product } from '@/types/Product'

export default async function ProductsIndex() {
	const products: Product[] = await query()
	
	return (
		<div className='products-container w-full py-8'>
			<ProductList products={products} />
		</div>
	)
}
