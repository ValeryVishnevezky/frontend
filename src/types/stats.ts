export interface StatsEntry {
  totalRevenue: number
  totalOrders: number
  totalProductsSold: number
  averageOrderValue: number
}

export interface StatsCollection {
  [key: string]: StatsEntry
}