import { Button } from '../../common/button';
import { links } from '../../data';
import './styles.css';

const Welcome = () => {
    return (
        <section className="welcome">
            <article className="welcome__container">
                <img className="welcome_logo" src="/img/welcome_logo.png" alt="Strada Auto" />
                <nav className="welcome__nav">
                    {links.map((item) => (
                        <a key={item.link} href={`#${item.link}`} className="welcome__nav-link">
                            {item.title}
                        </a>
                    ))}
                </nav>
                <header className="welcome__header">
                    <div className="welcome__content">
                        <h1 className="welcome__title">
                            автомобили мечты <br /> под заказ
                        </h1>
                        <h3 className="welcome__subtitle">с выгодой от 500 000 ₽</h3>
                        <a href="#contacts">
                            <Button cn="welcome__button" title="Получить консультацию" />
                        </a>
                    </div>
                </header>
            </article>
        </section>
    );
};

export default Welcome;
