import { get } from './http.service'
import { getCookies } from './cookies-service'
import { StatsCollection } from '@/types/stats'

const BASE_URL = 'stats'

export async function getStats(): Promise<StatsCollection> {
	const cookies = await getCookies()
	const res = await get<StatsCollection>(BASE_URL, undefined, cookies)
	return res
}
