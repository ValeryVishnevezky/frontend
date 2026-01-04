import { Credentials } from '@/types/User'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function login(credentials: Credentials) {
	const res = await fetch(`${BASE_URL}/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials),
		credentials: 'include'
	})

	if (!res.ok) {
		throw new Error('Login failed')
	}

	return res.json()
}

export async function signup(credentials: Credentials) {
	const res = await fetch(`${BASE_URL}/auth/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(credentials),
		credentials: 'include'
	})

	if (!res.ok) {
		throw new Error('Login failed')
	}

	return res.json()
}

export async function logout() {
	const res = await fetch(`${BASE_URL}/auth/logout`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		credentials: 'include'
	})

	if (!res.ok) {
		throw new Error('Login failed')
	}
}
