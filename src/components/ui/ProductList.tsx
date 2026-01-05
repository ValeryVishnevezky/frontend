import '@/assets/styles/components/ProductList.css'
import { Product } from '@/types/product'
import ProductPreview from './ProductPreview'

export default function ProductList({ products }: { products: Product[] }) {
	return (
		<div className='product-list-container'>
			{products.map(product => (
				<ProductPreview key={product._id} product={product} />
			))}
		</div>
	)
}
