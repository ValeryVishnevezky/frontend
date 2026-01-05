import '@/assets/styles/components/OrderList.css'
import OrderPreview from './OrderPreview'
import { Order } from '@/types/order'

export default function OrderList({ orders }: { orders: Order[] }) {
	return (
		<div className='order-list-container'>
			{orders.map(order => (
				<OrderPreview key={order._id} order={order} />
			))}
		</div>
	)
}
