import { Button } from '../../common/button';
import { AdvatageList } from './list';
import './styles.css';

const Advantages = () => {
    return (
        <section id="advantages" className="advantages">
            <AdvatageList />
            <div className="advantages__cta">
                <p className="advantages__cta-title">Привезём машину вашей мечты за 20-60 дней</p>
                <Button title="Получить консультацию →" />
            </div>
        </section>
    );
};

export default Advantages;
