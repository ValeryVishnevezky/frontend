import OrderList from '@/components/ui/OrderList'
import { getOrders } from '@/services/order-service'
import { Order } from '@/types/order'

export default async function OrdersIndex() {
	const orders: Order[] = await getOrders()
	// const orders: Order[] = null

	if (!orders || orders.length === 0) {
		return (
			<div className='empty-container'>
				<div className='list-empty'>
					<div className='list-empty-icon'>📦</div>
					<h2 className='list-empty-title'>No Orders Found</h2>
					<p className='list-empty-message'>There are no orders to display at this time.</p>
				</div>
			</div>
		)
	}
	return (
		<div className='orders-container py-8 w-full'>
			<OrderList orders={orders} />
		</div>
	)
}
