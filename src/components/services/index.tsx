import { Card } from '../../common/card';
import { ServicesList } from '../../data';
import './styles.css';

const Services = () => {
    return (
        <section id="services" className="services_container">
            <div className="services_header">
                <h2 className="services_title">Услуги « Strada Авто »</h2>
                <img
                    className="services_icon"
                    src="svg/van.svg"
                    loading="lazy"
                    alt="logo"
                    width={55}
                />
            </div>
            <p className="services_description">
                Предлагаем широкий спектр услуг, связанных с параллельным импортом первоклассных
                автомобилей. Поддержка на всех этапах. Ваш личный менеджер будет сопровождать вас на
                всех этапах сделки, учитывая ваши пожелания и потребности.
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
        </section>
    );
};
export default Services;
