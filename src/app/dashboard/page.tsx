import DashboardList from '@/components/ui/DashboardList'
import { getStats } from '@/services/stats-service'
import { DashboardStats, StatsFilter } from '@/types/dashboard'

export default async function DashboardIndex() {
	let filterBy: StatsFilter = { period: 'week' }
	let stats: DashboardStats = await getStats(filterBy)
	// const stats: any = null

	if (!stats || Object.keys(stats).length === 0) {
		return (
			<div className='empty-container'>
				<div className='list-empty'>
					<div className='list-empty-icon'>📈</div>
					<h2 className='list-empty-title'>No Stats Found</h2>
					<p className='list-empty-message'>There are no stats to display at this time.</p>
				</div>
			</div>
		)
	}

	return (
		<div className='dashboard-container py-8 w-full'>
			<DashboardList stats={stats} />
		</div>
	)
}
