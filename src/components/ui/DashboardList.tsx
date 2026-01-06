'use client'

import '@/assets/styles/components/DashboardList.css'
import { DashboardStats, StatsCollection, CardData, StatsFilter, StatsEntry, DeliveryStatsCollection } from '@/types/dashboard'
import { Calendar } from '../icons/Calendar'
import { useState } from 'react'
import BarChart from '../charts/BarChart'
import { getStatsClient } from '@/services/stats-service-client'
import DashboardCards from '../charts/DashboardCards'
import DoughnutChart from '../charts/DoughnutChart'

export default function DashboardList({ stats }: { stats: DashboardStats }) {
	const [currPeriodStats, setCurrentStats] = useState<StatsCollection>(stats.currentPeriod)
	const [prevPeriodStats, setPrevStats] = useState<StatsCollection>(stats.prevPeriod)
	const [deliveryStats, setDeliveryStats] = useState<DeliveryStatsCollection>(stats.deliveryStats)
	const [range, setRange] = useState<string>('7 days')
	const cardsData: CardData[] = getCardData(currPeriodStats, prevPeriodStats)

	async function handlePeriodChange(ev: React.ChangeEvent<HTMLSelectElement>) {
		const value = ev.target.value
		let period: StatsFilter['period'] = 'week'

		switch (value) {
			case '7 days':
				period = 'week'
				break
			case '90 days':
				period = '3months'
				break
			case '365 days':
				period = 'year'
				break
			default:
				period = 'week'
		}

		const newStats = await getStatsClient({ period })
		setCurrentStats(newStats.currentPeriod)
		setPrevStats(newStats.prevPeriod)
		setDeliveryStats(newStats.deliveryStats)
		setRange(value)
	}

	function getCardData(currPeriodStats: StatsCollection, prevPeriodStats: StatsCollection): CardData[] {
		const currTotalData = Object.values(currPeriodStats).reduce(
			(acc, entry) => ({
				totalRevenue: acc.totalRevenue + entry.totalRevenue,
				totalOrders: acc.totalOrders + entry.totalOrders,
				totalProductsSold: acc.totalProductsSold + entry.totalProductsSold,
				averageOrderValue: acc.averageOrderValue + entry.averageOrderValue
			}),
			{
				totalRevenue: 0,
				totalOrders: 0,
				totalProductsSold: 0,
				averageOrderValue: 0
			} as StatsEntry
		)

		const prevTotalData = Object.values(prevPeriodStats).reduce(
			(acc, entry) => ({
				totalRevenue: acc.totalRevenue + entry.totalRevenue,
				totalOrders: acc.totalOrders + entry.totalOrders,
				totalProductsSold: acc.totalProductsSold + entry.totalProductsSold,
				averageOrderValue: acc.averageOrderValue + entry.averageOrderValue
			}),
			{
				totalRevenue: 0,
				totalOrders: 0,
				totalProductsSold: 0,
				averageOrderValue: 0
			} as StatsEntry
		)

		const currAvgOrder = currTotalData.totalOrders ? currTotalData.totalRevenue / currTotalData.totalOrders : 0
		const prevAvgOrder = prevTotalData.totalOrders ? prevTotalData.totalRevenue / prevTotalData.totalOrders : 0

		return [
			{
				title: 'Revenue',
				value: currTotalData.totalRevenue,
				prevValue: prevTotalData.totalRevenue,
				icon: 'Currency',
				format: 'currency'
			},
			{
				title: 'Total Orders',
				value: currTotalData.totalOrders,
				prevValue: prevTotalData.totalOrders,
				icon: 'Up',
				format: 'number'
			},
			{
				title: 'Total Proucts Sold',
				value: currTotalData.totalProductsSold,
				prevValue: prevTotalData.totalProductsSold,
				icon: 'Product',
				format: 'number'
			},
			{
				title: 'Average Order Value',
				value: currAvgOrder,
				prevValue: prevAvgOrder,
				icon: 'Receipt',
				format: 'currency'
			}
		]
	}

	return (
		<div className='dashboard'>
			<div className='dashboard-header'>
				<div className='dashboard-title'>
					<h1>Dashboard Overview</h1>
					<p>Welcome back! Here's what's happening in last {range}.</p>
				</div>

				<div className='dashboard-date-range'>
					<Calendar width={20} />
					<select defaultValue='7 days' onChange={handlePeriodChange}>
						<option value='7 days'>Last 7 days</option>
						<option value='90 days'>Last 90 days</option>
						<option value='365 days'>Last 365 days</option>
					</select>
				</div>
			</div>

			<div className='dashboard-cards'>
				{cardsData.map((card, idx) => (
					<DashboardCards key={idx} data={card} index={idx} range={range} />
				))}
			</div>

			<div className='dashboard-charts-container'>
				<div className='dashboard-barchart-container'>
					<BarChart currPeriodStats={currPeriodStats} range={range} />
				</div>
				<div className='dashboard-doughnutchart-container'>
					<DoughnutChart deliveryStats={deliveryStats} range={range} />
				</div>
			</div>
		</div>
	)
}
