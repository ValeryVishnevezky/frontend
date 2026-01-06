'use client'
import '@/assets/styles/components/BarChart.css'
import { useEffect, useState } from 'react'
import type { ChartData, ChartOptions } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import 'chart.js/auto'
import { StatsCollection } from '@/types/dashboard'

const COLORS = ['#e87f7f71', '#6996d16e', '#88c9b15d']

export default function BarChart({ currPeriodStats, range }: { currPeriodStats: StatsCollection; range: string }) {
	const [isHidden, setIsHidden] = useState(false)
	const totalRevenues = Object.values(currPeriodStats).map(stat => stat.totalRevenue)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setIsHidden(window.innerWidth < 600)
		})
		return () => {
			window.removeEventListener('resize', () => {})
		}
	}, [currPeriodStats])

	const data: ChartData<'bar'> = {
		labels: Object.keys(currPeriodStats),
		datasets: [
			{
				label: 'Lower than 10k',
				data: totalRevenues.map(revenue => (revenue <= 10000 ? revenue : null)),
				backgroundColor: COLORS[0]
			},
			{
				label: '10k – 20k',
				data: totalRevenues.map(revenue => (revenue > 10000 && revenue <= 20000 ? revenue : null)),
				backgroundColor: COLORS[1]
			},
			{
				label: 'Higher than 20k',
				data: totalRevenues.map(revenue => (revenue > 20000 ? revenue : null)),
				backgroundColor: COLORS[2]
			}
		]
	}

	const options: ChartOptions<'bar'> = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				labels: {
					font: {
						size: 14,
						family: 'sans-serif',
						weight: 'normal'
					},
					color: '#666666'
				}
			},
			title: {
				display: !isHidden,
				text: `Sales Revenue In Last ${range}`,
				font: {
					size: 20,
					family: 'sans-serif',
					weight: 'normal'
				},
				color: '#353535'
			},
			tooltip: {
				callbacks: {
					label: context => `$${context.formattedValue}`
				}
			}
		},
		scales: {
			x: {
				stacked: true,
				ticks: {
					display: !isHidden,
					font: {
						size: 12,
						family: 'sans-serif'
					},
					color: '#666666'
				}
			},
			y: {
				beginAtZero: true,
				stacked: true,
				grace: '10%',
				ticks: {
					display: !isHidden,
					callback: value => `$${value.toLocaleString()}`,
					font: {
						size: 12,
						family: 'sans-serif'
					},
					color: '#666666'
				}
			}
		}
	}

	return <Bar data={data} options={options} />
}
