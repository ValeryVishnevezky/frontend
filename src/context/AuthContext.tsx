'use client'

import { createContext, useState, ReactNode, useEffect } from 'react'
import { AuthContextType, User } from '@/types/User'
import { loadFromStorage, removeFromStorage, saveToStorage } from '@/services/session-service'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState(true)
	const [user, setUser] = useState<User | null>(null)

	useEffect(() => {
		setLoading(false)
		const saved = loadFromStorage('user')
		if (saved) setUser(saved)
	  }, [])

	useEffect(() => {
		if (user) saveToStorage('user', user)
		else removeFromStorage('user')
	}, [user])

	if (loading) return null
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
