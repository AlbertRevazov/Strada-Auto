import { Button } from '../../common/button';
import { AdvatageList } from './list';
import './styles.css';

const Advantages = () => {
    return (
        <section id="advantages" className="advantages_root">
            <AdvatageList />
            <article className="bring_car">
                <p className="bring_car_title">Привезём машину вашей мечты за 20-60 дней</p>

                <Button title="Получить консультацию →" />
            </article>
        </section>
    );
};
export default Advantages;
