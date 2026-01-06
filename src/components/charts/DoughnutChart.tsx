'use client'
import '@/assets/styles/components/DoughnutChart.css'
import { useEffect, useState } from 'react'
import type { ChartData, ChartOptions } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { DeliveryStatsCollection } from '@/types/dashboard'

const COLORS = ['#ffc26779', '#6996d16e', '#88c9b15d', '#e87f7f71']

export default function DoughnutChart({ deliveryStats, range }: { deliveryStats: DeliveryStatsCollection; range: string }) {
	const [isHidden, setIsHidden] = useState(false)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setIsHidden(window.innerWidth < 600)
		})
		return () => {
			window.removeEventListener('resize', () => {})
		}
	}, [deliveryStats])

	const data: ChartData<'doughnut', number[], string> = {
		labels: Object.keys(deliveryStats),
		datasets: [
			{
				label: 'Orders',
				data: [deliveryStats.Pending, deliveryStats.Processing, deliveryStats.Delivered, deliveryStats.Cancelled],
				backgroundColor: COLORS,
				hoverOffset: 4
			}
		]
	}

	const options: ChartOptions<'doughnut'> = {
		responsive: true,
		maintainAspectRatio: true,
		aspectRatio: 1,
		cutout: '50%',
		plugins: {
			legend: {
				position: 'bottom',
				align: 'start',
				labels: {
					font: {
						size: 14,
						family: 'sans-serif',
						weight: 'normal'
					},
					color: '#666666',
					usePointStyle: true,
					padding: 20
				}
			},
			title: {
				display: !isHidden,
				text: `Orders Delivery Status In Last ${range}`,
				font: {
					size: 20,
					family: 'sans-serif',
					weight: 'normal'
				},
				color: '#353535'
			},
			tooltip: {
				callbacks: {
					label: context => `${context.formattedValue} orders`
				}
			}
		}
	}

	return <Doughnut data={data} options={options} />
}
