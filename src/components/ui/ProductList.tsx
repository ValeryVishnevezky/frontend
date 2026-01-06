'use client'

import '@/assets/styles/components/ProductList.css'
import { Product } from '@/types/product'
import ProductPreview from './ProductPreview'
import { OrderToSave } from '@/types/order'
import { useAuth } from '@/hooks/useAuth'
import { saveOrder } from '@/services/order-service'

export default function ProductList({ products }: { products: Product[] }) {
	const { user } = useAuth()

	async function onAddOrder(product: Product) {
		if (!user) return
		const orderToAdd: OrderToSave = {
			product,
			customer: user,
			quantity: 1
		}
		await saveOrder(orderToAdd)
	}

	return (
		<div className='product-list-container'>
			{products.map(product => (
				<ProductPreview key={product._id} product={product} onAddOrder={onAddOrder} />
			))}
		</div>
	)
}
