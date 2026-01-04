import '@/assets/styles/components/ProductList.css'
import { Product } from '@/types/Product'
import ProductPreview from './ProductPreview'

export default function ProductList() {
	const products: Product[] = [
		{
			_id: '69584c9bd5407f9e7c2406c3',
			name: 'Apple MacBook Pro 16 Apple M4 Pro Chip 14-Core CPU, 20-Core GPU, 512GB SSD',
			price: 6500,
			category: 'Electronics',
			inStock: true,
			createdAt: '2026-01-02T22:54:19.369Z',
			imgUrl: 'https://res.cloudinary.com/dusecwxch/image/upload/v1767527792/Z1FP-48GB-1T_05112024171558_l0ncm3.jpg',
		},
		{
			_id: '69584c9bd5407f9e7c2406c4',
			name: 'Apple MacBook Pro 16 Apple M4 Pro Chip 14-Core CPU, 20-Core GPU, 512GB SSD',
			price: 500,
			category: 'Electronics',
			inStock: true,
			createdAt: '2026-01-02T22:54:19.369Z',
			imgUrl: 'https://res.cloudinary.com/dusecwxch/image/upload/v1767527792/Z1FP-48GB-1T_05112024171558_l0ncm3.jpg',
		},
		{
			_id: '69584c9bd5407f9e7c2406c5',
			name: 'Apple MacBook Pro 16 Apple M4 Pro Chip 14-Core CPU, 20-Core GPU, 512GB SSD',
			price: 1500,
			category: 'Electronics',
			inStock: false,
			createdAt: '2026-01-02T22:54:19.369Z',
			imgUrl: 'https://res.cloudinary.com/dusecwxch/image/upload/v1767527792/Z1FP-48GB-1T_05112024171558_l0ncm3.jpg',
		},
		{
			_id: '69584c9bd5407f9e7c2406c6',
			name: 'Apple MacBook Pro 16 Apple M4 Pro Chip 14-Core CPU, 20-Core GPU, 512GB SSD',
			price: 800,
			category: 'Electronics',
			inStock: true,
			createdAt: '2026-01-02T22:54:19.369Z',
			imgUrl: 'https://res.cloudinary.com/dusecwxch/image/upload/v1767527792/Z1FP-48GB-1T_05112024171558_l0ncm3.jpg',
		},
		{
			_id: '69584c9bd5407f9e7c2406c7',
			name: 'Apple MacBook Pro 16 Apple M4 Pro Chip 14-Core CPU, 20-Core GPU, 512GB SSD',
			price: 6500,
			category: 'Electronics',
			inStock: true,
			createdAt: '2026-01-02T22:54:19.369Z',
			imgUrl: 'https://res.cloudinary.com/dusecwxch/image/upload/v1767527792/Z1FP-48GB-1T_05112024171558_l0ncm3.jpg',
		},
		{
			_id: '69584c9bd5407f9e7c2406c8',
			name: 'MacBook Pro 16 (2024) M4 PRO ',
			price: 6500,
			category: 'Electronics',
			inStock: false,
			createdAt: '2026-01-02T22:54:19.369Z',
			// imgUrl: 'https://res.cloudinary.com/dusecwxch/image/upload/v1767527792/Z1FP-48GB-1T_05112024171558_l0ncm3.jpg',
		},
	]

	return (
		<div className="product-list-container">
			{products.map((product) => (
				<ProductPreview key={product._id} product={product} />
			))}
		</div>
	)
}
