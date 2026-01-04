import '@/assets/styles/components/ProductList.css'
import { ImagePlaceholder } from '../icons/ImagePlaceholder'
import { OrderProps } from '@/types/Order'
import Image from 'next/image'

export default function OrderPreview({ order }: OrderProps) {
	return (
		<div className="product-card">
			<div className="product-image-container">
				{!order.product.imgUrl ? (
					<div className="product-image-placeholder">
						<ImagePlaceholder />
					</div>
				) : (
					<Image
						className="product-img"
						fill
						src={order.product.imgUrl}
						alt={`${order.product.name} image`}
					/>
				)}
			</div>

			<div className="product-info">
				<span className="product-category">{order.product.category}</span>

				<h3 className="product-name">{order.product.name}</h3>

				<div className="product-price-action">
					<div>
						<span className="product-price">
							₪{order.totalPrice.toLocaleString('he-IL')}
						</span>
					</div>
					<button
						className="add-to-cart-button">
						More Info
					</button>
				</div>
			</div>
		</div>
	)
}
