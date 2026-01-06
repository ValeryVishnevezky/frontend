import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_SERVER_API_URL : process.env.NEXT_PUBLIC_API_URL

const axiosRequest = axios.create({
	baseURL: BASE_URL,
	withCredentials: true
})

axiosRequest.interceptors.response.use(
	res => res,
	err => {
		return Promise.reject(err)
	}
)

export async function get<T>(url: string, params?: Record<string, string | number | boolean | object | undefined>, headers?: Record<string, string>): Promise<T> {
	try {
		const res = await axiosRequest.get<T>(url, { params, headers })
		if (res.status >= 400) throw new Error(`GET ${url} failed: ${res.status}`)
		return res.data
	} catch (error) {
		throw error
	}
}

export async function post<T>(url: string, data?: any, headers?: Record<string, string>): Promise<T> {
	try {
		const res = await axiosRequest.post<T>(url, data, { headers })
		if (res.status >= 400) throw new Error(`POST ${url} failed: ${res.status}`)
		console.log('res.data', res)
		return res.data
	} catch (error) {
		throw error
	}
}

export async function put<T>(url: string, data?: any, headers?: Record<string, string>): Promise<T> {
	try {
		const res = await axiosRequest.put<T>(url, data, { headers })
		if (res.status >= 400) throw new Error(`PUT ${url} failed: ${res.status}`)
		return res.data
	} catch (error) {
		throw error
	}
}

export async function remove<T>(url: string, headers?: Record<string, string>): Promise<T> {
	try {
		const res = await axiosRequest.delete<T>(url, { headers })
		if (res.status >= 400) throw new Error(`DELETE ${url} failed: ${res.status}`)
		return res.data
	} catch (error) {
		throw error
	}
}
