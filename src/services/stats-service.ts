import { get } from './http.service'
import { getCookies } from './cookies-service'
import { DashboardStats, StatsFilter } from '@/types/dashboard'

const BASE_URL = 'stats'

export async function getStats(filterBy: StatsFilter = {}): Promise<DashboardStats> {
	const cookies = await getCookies()
	const res = await get<DashboardStats>(BASE_URL, filterBy, cookies)
	return res
}
