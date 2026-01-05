export type Theme = 'light' | 'dark'

export const THEME_KEY = 'theme'

export function toggleTheme() {
  const theme = getTheme()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  setAppTheme(nextTheme)
}

export function getTheme(): Theme {
	if (typeof window === 'undefined') return 'light'

	const stored = localStorage.getItem(THEME_KEY) as Theme | null
	if (stored) {
		setAppTheme(stored)
		return stored
	}
  
	const system = getSystemTheme()
	setAppTheme(system)
	return system
}

export function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function setAppTheme(theme: Theme) {
  const html = document.documentElement
  html.setAttribute('data-theme', theme)
  localStorage.setItem(THEME_KEY, theme)
}

