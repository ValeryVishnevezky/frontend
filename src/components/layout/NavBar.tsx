'use client'

import { useTheme } from '@/hooks/useTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LightIcon } from '@/components/icons/LightIcon'
import { DarkIcon } from '@/components/icons/DarkIcon'

export default function NavBar() {
	const { theme, onToggleTheme } = useTheme()
	const pathname = usePathname()
	const Icon = theme === 'dark' ? DarkIcon : LightIcon
	
	return (
		<nav className="nav-bar">
			<button className={'nav-link theme'} onClick={onToggleTheme}>
			 <Icon width={20} />
			</button>
			<Link
				href="/"
				className={`nav-link ${pathname === '/' ? 'active' : ''}`}
			>
				Home
			</Link>
			<Link
				href="/orders"
				className={`nav-link ${pathname === '/orders' ? 'active' : ''}`}
			>
				Orders
			</Link>
			<Link
				href="/login"
				className={`nav-link login ${
					pathname === '/login' ? 'active' : ''
				}`}
			>
				Login
			</Link>
		</nav>
	)
}
