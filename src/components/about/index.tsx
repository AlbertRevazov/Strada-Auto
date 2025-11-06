import { AdvantageInfo } from '../../data';
import './styles.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__header">
                <div className="about__title-wrapper">
                    <h2 className="about__title">{AdvantageInfo.title}</h2>
                    <img
                        className="about__icon"
                        src="svg/van.svg"
                        loading="lazy"
                        alt="logo"
                        width={55}
                    />
                </div>
                <div className="about__description-wrapper">
                    <p className="about__description">{AdvantageInfo.description}</p>
                    <p className="about__description about__description--right">{AdvantageInfo.descriptionSecond}</p>
                </div>
            </div>
            <img className="about__image" src="img/about.webp" loading="lazy" alt="about" />
        </section>
    );
};

export default About;
