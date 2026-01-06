export interface StatsEntry {
	totalRevenue: number
	totalOrders: number
	totalProductsSold: number
	averageOrderValue: number
}

export interface StatsCollection {
	[key: string]: StatsEntry
}

export interface DeliveryStatsCollection {
	Pending: number
	Processing: number
	Delivered: number
	Cancelled: number
}

export interface DashboardStats {
	currentPeriod: StatsCollection
	prevPeriod: StatsCollection
	deliveryStats: DeliveryStatsCollection
}

export type StatsFilter = {
	period?: 'week' | '3months' | 'year'
}

export interface CardData {
	title: string
	value: number
	prevValue: number
	icon: string
	format: 'currency' | 'percentage' | 'number'
}

export interface CardsData {
	[key: string]: CardData
}

export interface DashboardCardProps {
	data: CardData
	index: number
	range: string
}
