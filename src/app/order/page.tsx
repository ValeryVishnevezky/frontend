import OrderList from '@/components/ui/OrderList'
import { query } from '@/services/order-service'
import { Order } from '@/types/Order'

export default async function OrdersIndex() {
	const orders: Order[] = await query()
	// const orders= null
	return (
		<div className='orders-container py-8 w-full'>
			<OrderList orders={orders} />
		</div>
	)
}
