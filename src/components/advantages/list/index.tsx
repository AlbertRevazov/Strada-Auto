import { advantagesList } from '../../../data';
import { Card } from '../../../common/card';
import './styles.css';

export const AdvatageList = () => {
    return (
        <article className="advantages_list">
            <div className="advantages_list_wrapper">
                <img
                    className="advantages_list_icon"
                    src="svg/van.svg"
                    loading="lazy"
                    alt="logo"
                    width={55}
                />
                <h2 className="advantages_list_title">Почему выбирают нас?</h2>
            </div>
            {advantagesList.map((item) => (
                <Card type="card" key={item.id} title={item.title} subtitle={item.subtitle} />
            ))}
        </article>
    );
};
