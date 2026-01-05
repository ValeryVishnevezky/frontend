import { Credentials, User } from '@/types/user'
import { post } from './http.service'

const BASE_URL = 'auth/'

export async function login(credentials: Credentials) {
	return await post<User>(BASE_URL + 'login', credentials)
}

export async function signup(credentials: Credentials) {
	return await post<User>(BASE_URL + 'signup', credentials)
}

export async function logout() {
	await post(BASE_URL + 'logout')
}
