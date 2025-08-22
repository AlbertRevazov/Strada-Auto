import { AdvantageInfo } from '../../../data'
import './styles.css'

export const AdvantagesInfo = () => {
	return (
		<>
			<article className='advantages_title'>
				<h2>{AdvantageInfo.title}</h2>
				<img
					src='svg/van.svg'
					loading='lazy'
					alt='logo'
					width={35}
				/>
			</article>
			<article className='advantages_description'>
				<h4>
					{
						AdvantageInfo.description
					}
				</h4>
				<h4>
					{
						AdvantageInfo.descriptionSecond
					}
				</h4>
			</article>
		</>
	)
}
