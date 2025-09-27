import { Card } from '../../common/card';
import { ServicesList } from '../../data';
import './styles.css';

const Services = () => {
    return (
        <section id="services" className="services_root">
            <article className="services_container">
                <div className="services_title">
                    <h2>Услуги «Strada Авто»</h2>
                    <img src="svg/van.svg" loading="lazy" alt="logo" width={35} />
                </div>
                <p className="services_description">
                    Предлагаем широкий спектр услуг, связанных с параллельным импортом первоклассных
                    автомобилей. Поддержка на всех этапах. Ваш личный менеджер будет сопровождать
                    вас на всех этапах сделки, учитывая ваши пожелания и потребности.
                </p>
                {ServicesList.map((service) => (
                    <Card
                        key={service.subtitle}
                        type="card"
                        img={service.img}
                        title={service.title}
                        subtitle={service.subtitle}
                    />
                ))}
            </article>
        </section>
    );
};
export default Services;
