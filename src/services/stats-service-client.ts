import { get } from './http.service'
import { DashboardStats, StatsFilter } from '@/types/dashboard'

const BASE_URL = 'stats'

export async function getStatsClient(filterBy: StatsFilter = {}): Promise<DashboardStats> {
	const res = await get<DashboardStats>(BASE_URL, filterBy)
	return res
}
