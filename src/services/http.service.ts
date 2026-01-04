import axios from 'axios'

const BASE_URL = process.env.NODE_ENV === 'production' ? '/api/' : process.env.NEXT_PUBLIC_API_URL

const axiosRequest = axios.create({
	baseURL: BASE_URL,
	withCredentials: true
})

axiosRequest.interceptors.response.use(
	res => res,
	err => {
		if (err.response?.status === 401) sessionStorage.clear()
		return Promise.reject(err)
	}
)

export const httpService = {
	get: <T = any>(url: string, params?: Record<string, any>) => axiosRequest.get<T>(url, { params }).then(res => res.data),
	post: <T = any>(url: string, data?: any) => axiosRequest.post<T>(url, data).then(res => res.data),
	put: <T = any>(url: string, data?: any) => axiosRequest.put<T>(url, data).then(res => res.data),
	delete: <T = any>(url: string, data?: any) => axiosRequest.delete<T>(url, { data }).then(res => res.data)
}
