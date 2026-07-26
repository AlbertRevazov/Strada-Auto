import { directoryList } from '../../data';
import { Card } from '../../common/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax } from 'swiper/modules';
import './styles.css';
import 'swiper/css';

const Directory = () => {
    return (
        <section id="directory" className="directory">
            <h2 className="directory__title">Каталог автомобилей</h2>
            <Swiper
                modules={[Autoplay, Parallax]}
                autoplay
                parallax
                loop
                spaceBetween={40}
                slidesPerView={1}
                centeredSlides={true}
                speed={1200}
                className="directory__list"
            >
                {directoryList.map((dir) => (
                    <SwiperSlide>
                        <Card
                            data-swiper-parallax="-300"
                            data-swiper-parallax-duration="600"
                            key={dir.id}
                            type="directory"
                            img={dir.src}
                            title={dir.title}
                            acceleration={dir.acceleration}
                            drive={dir.drive}
                            gearbox={dir.gearbox}
                            power={dir.power}
                            volume={dir.volume}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Directory;
