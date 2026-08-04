import { advantagesList } from '../../../data';
import { AdvantagesCard } from '../../../common/card/advantages';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './styles.css';
import 'swiper/swiper.css';

export const AdvatageList = () => {
    return (
        <div className="advantages-list">
            <header className="advantages-list__header">
                <img
                    className="services__icon"
                    src="svg/van.svg"
                    loading="lazy"
                    alt="logo"
                    width={55}
                />
                <h2 className="advantages-list__title">Почему выбирают нас?</h2>
            </header>
            <Swiper
                className="advantages-swiper"
                modules={[Autoplay]}
                speed={1200}
                spaceBetween={40}
                loop
                slidesPerView={1}
                autoplay
                direction="horizontal"
            >
                {advantagesList.map((item, idx) => (
                    <SwiperSlide>
                        <AdvantagesCard
                            idx={idx}
                            key={item.id + idx}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
