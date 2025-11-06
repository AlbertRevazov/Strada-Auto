import { Card } from '../../common/card';
import { ServicesList } from '../../data';
import './styles.css';

const Services = () => {
    return (
        <section id="services" className="services">
            <div className="services__header">
                <h2 className="services__title">Наши услуги</h2>
                <img
                    className="services__icon"
                    src="svg/van.svg"
                    loading="lazy"
                    alt="logo"
                    width={55}
                />
            </div>
            <div className="services__list">
                {ServicesList.map((service, idx) =>
                    <Card
                        type="services"
                        key={service.id + service.title}
                        img={service.img}
                        title={service.title}
                        subtitle={service.subtitle}
                    />
                )}
            </div>
        </section>
    );
};

export default Services;
