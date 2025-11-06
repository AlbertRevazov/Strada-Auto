import { ContactLinks } from './links';
import './styles.css';

const Contacts = () => {
    return (
        <section id="contacts" className="contacts">
            <h2 className="contacts__title">
                Рассчитаем стоимость автомобиля в мессенджерах или по телефону
            </h2>
            <ContactLinks />
        </section>
    );
};

export default Contacts;
