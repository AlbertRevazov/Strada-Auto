import { Button } from '../../common/button';
import { AdvantagesInfo } from './info';
import { AdvatageList } from './list';
import './styles.css';

const Advantages = () => {
    return (
        <>
            <section id="advantages" className="advantages_header">
                <AdvantagesInfo />
            </section>
            <img
                className="advantages_img"
                src="img/advantages.jpg"
                loading="lazy"
                alt="advantages"
            />
            <AdvatageList />
            <article className="bring_car">
                <p>Привезём машину</p>
                <p>вашей мечты за 20-60 дней</p>

                <Button title="Получить консультацию →" />
            </article>
        </>
    );
};
export default Advantages;
