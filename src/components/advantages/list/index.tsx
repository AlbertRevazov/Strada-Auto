import { advantagesList } from '../../../data'
import { Card } from '../../../common/card'
import './styles.css'

export const AdvatageList = () => {
	return (
		<article className='advantages_list'>
			<div className='advantages_list_title'>
				<img
					src='svg/van.svg'
					loading='lazy'
					alt='logo'
					width={35}
				/>
				<h2>Почему выбирают нас?</h2>
			</div>
			{advantagesList.map(item => (
				<Card
					key={item.id}
					title={item.title}
					subtitle={
						item.subtitle
					}
				/>
			))}
		</article>
	)
}
