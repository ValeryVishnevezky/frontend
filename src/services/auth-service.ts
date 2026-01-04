import { Credentials } from '@/types/User'
import { httpService } from './http.service'

const BASE_URL = 'auth/'

export async function login(credentials: Credentials) {
    try {
        const user = await httpService.post(BASE_URL + 'login', credentials)
        return user
    } catch (error) {
        console.error('Could not login')
        throw error
    }
}

export async function signup(credentials: Credentials) {
    try {
        const user = await httpService.post(BASE_URL + 'signup', credentials)
        return user
    } catch (error) {
        console.error('Could not signup')
        throw error
    }
}

export async function logout() {
    try {
        await httpService.post(BASE_URL + 'logout')
    } catch (error) {
        console.error('Could not logout')
        throw error
    }
}
