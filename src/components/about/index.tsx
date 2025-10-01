import { AdvantageInfo } from '../../data';
import './styles.css';

const About = () => {
    return (
        <section id="about" className="about_root">
            <article className="about_header">
                <div className="about_wrap_title">
                    <h2 className="about_title">{AdvantageInfo.title}</h2>
                    <img
                        className="about_icon"
                        src="svg/van.svg"
                        loading="lazy"
                        alt="logo"
                        width={55}
                    />
                </div>
                <div className="about_wrap_description">
                    <h4 className="about_description">{AdvantageInfo.description}</h4>
                    <h4 className="about_description">{AdvantageInfo.descriptionSecond}</h4>
                </div>
            </article>
            <img className="about_img" src="img/about.jpg" loading="lazy" alt="about" />
        </section>
    );
};

export default About;
