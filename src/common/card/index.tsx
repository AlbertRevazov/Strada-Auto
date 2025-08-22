import React from 'react'
import './styles.css'

interface ICardProps {
	title: string
	subtitle: string
}

export const Card: React.FC<ICardProps> = ({ title, subtitle }) => {
	return (
		<div className='card_root'>
			<h3 className='card_title'>{title}</h3>
			<h4 className='card_subtitle'>
				{subtitle}
			</h4>
		</div>
	)
}
