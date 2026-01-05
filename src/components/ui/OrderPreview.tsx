import '@/assets/styles/components/OrderList.css'
import { ImagePlaceholder } from '../icons/ImagePlaceholder'
import { OrderProps } from '@/types/Order'
import Image from 'next/image'

export default function OrderPreview({ order }: OrderProps) {
	function formatDate(date: Date | string): string {
		const orderDate = new Date(date)
		return orderDate.toLocaleString('in-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		})
	}

	const formattedDate = formatDate(order.createdAt)
	const orderId = String(order._id).slice(10)

	return (
		<div className='order'>
			<div className='order-product-section'>
				<div className='order-product-image'>
					{!order.product.imgUrl ? (
						<div className='image-placeholder'>
							<ImagePlaceholder />
						</div>
					) : (
						<Image className='order-img' fill src={order.product.imgUrl} alt={`${order.product.name} image`} />
					)}
				</div>

				<div className='order-product-info'>
					<div className='order-id'>Order #{orderId}</div>

					<h3 className='order-product-name'>{order.product.name}</h3>

					<div className='order-product-details'>
						<span className='order-category'>{order.product.category}</span>
						<span className='separator'>•</span>
						<span className='order-product-price'>₪{order.product.price.toLocaleString('he-IL')}</span>
					</div>

				</div>
			</div>

			<div className='order-details-section'>
				<div className='order-details-item'>
					<span className='order-details-label'>Customer</span>
					<span className='order-details-value order-customer-name'>{order.customer.username}</span>
				</div>

				<div className='order-details-item'>
					<span className='order-details-label'>Quantity</span>
					<span className='order-details-value'>{`${order.quantity} ${order.quantity > 1 ? 'Items' : 'Item'}`}</span>
				</div>

				<div className='order-details-item'>
					<span className='order-details-label'>Date</span>
					<span className='order-details-value'>{formattedDate}</span>
				</div>
			</div>

			<div className='order-summary-section'>
				<span className={`order-status ${order.status}`}>{order.status}</span>

				<div className='order-total-container'>
					<div className='order-total'>
						<span className='order-total-label'>Total</span>
						<span className='order-total-price'>₪{order.totalPrice.toLocaleString('he-IL')}</span>
					</div>

					<button className='order-action-button'>View Details</button>
				</div>
			</div>
		</div>
	)
}
