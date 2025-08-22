import { Button } from '../../common/button'
import { links } from '../../data'
import './styles.css'

export const Welcome = () => {
	return (
		<section className='welcome_root'>
			<article className='welcome'>
				<nav className='navLinks'>
					{links.map(item => (
						<a
							href={`#${item.link}`}
							className='navLinks_link'
						>
							{
								item.title
							}
						</a>
					))}
				</nav>
				{/* <video
					className='background-video'
					autoPlay
					muted
					loop
					playsInline
				>
					<source
						src='/videos/123.mp4'
						type='video/mp4'
					/>
					Ваш браузер не
					поддерживает видео.
				</video> */}
				<header className='header'>
					<div className='header_title'>
						<h1>
							автомобили
							мечты
							под
							заказ
						</h1>
						<Button
							cn='header_button'
							title='Получить консультацию'
						/>
					</div>
				</header>
			</article>
		</section>
	)
}
