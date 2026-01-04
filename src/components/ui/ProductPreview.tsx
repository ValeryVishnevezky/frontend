import '@/assets/styles/components/ProductList.css'
import { ImagePlaceholder } from '../icons/ImagePlaceholder'
import { ProductProps } from '@/types/Product'
import Image from 'next/image'

export default function ProductPreview({ product }: ProductProps) {
	return (
		<div className="product-card">
			<div className="product-image-container">
				{!product.imgUrl ? (
					<div className="product-image-placeholder">
						<ImagePlaceholder />
					</div>
				) : (
					<Image
						className="product-img"
						fill
						src={product.imgUrl}
						alt={`${product.name} image`}
					/>
				)}

				<div className="stock-badge-container">
					<span
						className={`stock-badge ${
							product.inStock ? 'in-stock' : 'out-of-stock'
						}`}
					>
						{product.inStock ? 'In Stock' : 'Out of Stock'}
					</span>
				</div>
			</div>

			<div className="product-info">
				<span className="product-category">{product.category}</span>

				<h3 className="product-name">{product.name}</h3>

				<div className="product-price-action">
					<div>
						<span className="product-price">
							₪{product.price.toLocaleString('he-IL')}
						</span>
					</div>
					<button
						className="add-to-cart-button"
						disabled={!product.inStock}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}
