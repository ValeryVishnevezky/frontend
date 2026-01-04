import OrderList from '@/components/ui/OrderList'
import { query } from '@/services/order-service'
import { Order } from '@/types/Order'

export default async function OrdersIndex() {
	const orders: Order[] = await query()
	return (
		<div className='container mx-auto py-8'>
			<OrderList orders={orders} />
		</div>
	)
}
