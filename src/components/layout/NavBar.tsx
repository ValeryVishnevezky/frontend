'use client'

import { useTheme } from '@/hooks/useTheme'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LightIcon } from '@/components/icons/LightIcon'
import { DarkIcon } from '@/components/icons/DarkIcon'
import Image from 'next/image'
import { logout } from '@/services/auth-service'

export default function NavBar() {
	const { theme, onToggleTheme } = useTheme()
	const { user, setUser } = useAuth()
	const pathname = usePathname()
	const Icon = theme === 'dark' ? DarkIcon : LightIcon

	async function onLogout() {
		logout()
		setUser(null)
	}

	return (
		<nav className='nav-bar'>
			<button className={'nav-link theme'} onClick={onToggleTheme}>
				<Icon width={20} />
			</button>
			<Link href='/' className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
				Home
			</Link>
			{user && user?.isAdmin && (
				<>
					<Link href='/order' className={`nav-link ${pathname === '/order' ? 'active' : ''}`}>
						Orders
					</Link>
					<Link href='/dashboard' className={`nav-link ${pathname === '/dashboard' ? 'active' : ''}`}>
						Dashboard
					</Link>
				</>
			)}
			{user ? (
				<div className='nav-user-actions'>
					<button onClick={onLogout} className='logout'>
						Logout
					</button>

					<Link href='/profile' className='user'>
						<div className='user-img-container'>
							<Image src={user.imgUrl || 'https://res.cloudinary.com/dusecwxch/image/upload/v1767549373/5f7ce1fc-833c-4ebe-ae15-d07e58824e75_mrtdo6.jpg'} alt={user.fullname} width={40} height={40} />
						</div>
					</Link>
				</div>
			) : (
				<div className='auth-actions'>
					<Link href='/auth/login' className={`login ${pathname === '/auth/login' ? 'active' : ''}`}>
						Login
					</Link>

					<Link href='/auth/signup' className={`signup ${pathname === '/auth/signup' ? 'active' : ''}`}>
						Signup
					</Link>
				</div>
			)}
		</nav>
	)
}
