import { Button } from '../../common/button';
import { useInView } from '../../utils/useInView';
import { AdvatageList } from './list';
import './styles.css';

const Advantages = () => {
    const { ref, isVisible } = useInView({ threshold: 0.7 });

    return (
        <section id="advantages" className="advantages" ref={ref}>
            <AdvatageList />
            <div className={`advantages__cta ${isVisible ? 'inView--animate' : ''}`}>
                <p className="advantages__cta-title">Привезём машину вашей мечты за 20-60 дней</p>
                <Button title="Получить консультацию →" />
            </div>
        </section>
    );
};

export default Advantages;
