'use client'

import '@/assets/styles/components/DashboardCards.css'
import { useEffect, useState } from 'react'
import { CardData, DashboardCardProps } from '@/types/dashboard'
import { Currency } from '../icons/Currency'
import { Products } from '../icons/Products'
import { Receipt } from '../icons/Receipt'
import { Up } from '../icons/Up'
import { ArrowUp } from '../icons/ArrowUp'
import { ArrowDown } from '../icons/ArrowDown'

const iconsMap: Record<string, React.ReactNode> = {
	Currency: <Currency width={20}/>,
	Product: <Products width={20}/>,
	Up: <Up width={20}/>,
	Receipt: <Receipt width={20}/>,
}

export default function DashboardCards({ data, index, range }: DashboardCardProps) {
	const [displayValue, setDisplayValue] = useState(0)
	const icon = iconsMap[data.icon] || '📊'
	const change = calculatePercent(data.value, data.prevValue)
	const isPositive = change >= 0

	useEffect(() => {
		let current = 0
		const steps = 100
		const stepValue = data.value / steps

		const timer = setInterval(() => {
			current += stepValue
			setDisplayValue(current >= data.value ? data.value : current)
		}, 20)

		return () => clearInterval(timer)
	}, [data.value])

	function formatValue(value: number, format: CardData['format']) {
		if (format === 'currency') return `₪${Math.floor(value).toLocaleString('he-IL')}`
		if (format === 'percentage') return `${value}%`
		return value.toLocaleString('he-IL')
	}

	function calculatePercent(current: number, previous: number) {
		return Math.floor(((current - previous) / previous) * 100)
	}

	return (
		<div className='stat-card' style={{ animationDelay: `${index * 700}ms` }}>

			<div className='card-header'>
				<div className='card-icon'>{icon}</div>

				<div className={`card-change ${isPositive ? 'positive' : 'negative'}`}>
					<span>{isPositive ? <ArrowUp width={15} /> : <ArrowDown width={15} />}</span>
					<span>{Math.abs(change)}%</span>
				</div>
			</div>

			<div>
				<p className='card-title'>{data.title}</p>
				<p className={`card-value ${isPositive ? 'positive' : 'negative'}`}>{formatValue(displayValue, data.format)}</p>
			</div>

			<p className='card-subtitle'>
				vs. {formatValue(data.prevValue, data.format)} prev {range}
			</p>

		</div>
	)
}
