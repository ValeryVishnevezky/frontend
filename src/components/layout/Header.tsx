import Image from 'next/image'
import NavBar from '@/components/layout/NavBar'
import '@/assets/styles/components/Header.css'
import Link from 'next/link'

export default function Header() {
	return (
		<header className="full">
			<Link href="/">
				<div className="logo">
					<Image
						src="https://res.cloudinary.com/dusecwxch/image/upload/v1767454207/6862537_vgckma.jpg"
						alt="Logo"
						width={40}
						height={40}
						className="rounded-lg object-cover"
					/>
					<h1 className="">Store</h1>
				</div>
			</Link>
			<NavBar />
		</header>
	)
}
