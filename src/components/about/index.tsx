import './styles.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__header">
                <div className="about__title-wrapper">
                    <h2 className="about__title">
                        Добро пожаловать в « Strada Авто » — ваш путь к автомобилю мечты начинается
                        здесь!
                    </h2>
                    <img
                        className="about__icon"
                        src="svg/van.svg"
                        loading="lazy"
                        alt="logo"
                        width={55}
                    />
                </div>
                <div className="about__description-wrapper">
                    <p className="about__description">
                        <b className="highlighter">«Strada Авто»</b> — это молодая, динамично
                        развивающаяся компания, которая уже успела зарекомендовать себя на рынке как{' '}
                        <strong className="highlighter">надёжный партнёр</strong> в сфере
                        параллельного импорта первоклассных автомобилей.
                    </p>
                    <p className="about__description about__description--right">
                        Наш главный офис находится в Москве, и мы гордимся тем, что собрали{' '}
                        <strong className="highlighter">команду профессионалов</strong>, которые
                        являются настоящими фанатами своего дела.
                    </p>
                </div>
            </div>
            <img className="about__image" src="img/about.webp" loading="lazy" alt="about" />
        </section>
    );
};

export default About;
