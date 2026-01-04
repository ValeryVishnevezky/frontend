'use client'
import { useEffect, useState } from 'react'
import { getTheme, toggleTheme, Theme } from '@/services/theme-service'

export function useTheme() {
	const [theme, setTheme] = useState<Theme | null>(null)
	
	useEffect(() => {
		const userTheme = getTheme()
		setTheme(userTheme)
	}, [])

	function onToggleTheme() {
		toggleTheme()
		const userTheme = getTheme()
		setTheme(userTheme)
	}

	return { theme, onToggleTheme }
}
