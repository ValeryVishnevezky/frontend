import '@/assets/styles/components/OrderList.css'
import OrderPreview from './OrderPreview'
import { Order } from '@/types/Order'

export default function OrderList({ orders }: { orders: Order[] }) {
	
	if (!orders || orders.length === 0) {
		return (
			<div className="order-list-empty">
				<div className="order-list-empty-icon">📦</div>
				<h2 className="order-list-empty-title">No Orders Found</h2>
				<p className="order-list-empty-message">
					There are no orders to display at this time.
				</p>
			</div>
		)
	}

	return (
		<div className="order-list-container">
			{orders.map((order) => (
				<OrderPreview key={order._id} order={order} />
			))}
		</div>
	)
}
