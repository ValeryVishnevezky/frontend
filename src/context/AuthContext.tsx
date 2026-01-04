'use client'

import { createContext, useState, ReactNode, useEffect } from 'react'
import { AuthContextType, User } from '@/types/User'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		setLoading(false)
		const saved = localStorage.getItem('user')
		if (saved) setUser(JSON.parse(saved))
	  }, [])

	useEffect(() => {
		if (user) localStorage.setItem('user', JSON.stringify(user))
		else localStorage.removeItem('user')
	}, [user])

	if (loading) return null
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
