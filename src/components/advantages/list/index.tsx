import { advantagesList } from '../../../data';
import { Card } from '../../../common/card';
import './styles.css';

export const AdvatageList = () => {
    return (
        <div className="advantages-list">
            <div className="advantages-list__header">
                <img
                    className="advantages-list__icon"
                    src="svg/van.svg"
                    loading="lazy"
                    alt="logo"
                    width={55}
                />
                <h2 className="advantages-list__title">Почему выбирают нас?</h2>
            </div>
            {advantagesList.map((item, idx) => (
                <Card
                    type="advantages"
                    idx={idx}
                    key={item.id + idx}
                    title={item.title}
                    subtitle={item.subtitle}
                />
            ))}
        </div>
    );
};
