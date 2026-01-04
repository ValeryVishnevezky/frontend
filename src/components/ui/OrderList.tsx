import '@/assets/styles/components/ProductList.css'
import OrderPreview from './OrderPreview'
import { Order } from '@/types/Order'

export default function OrderList({ orders }: { orders: Order[] }) {

	return (
		<div className="product-list-container">
			{orders.map((order) => (
				<OrderPreview key={order._id} order={order} />
			))}
		</div>
	)
}
