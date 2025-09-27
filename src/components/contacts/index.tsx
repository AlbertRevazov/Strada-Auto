import React from 'react';
import { ContactLinks } from './links';
import './styles.css';

const Contacts = () => {
    return (
        <div id="contacts" className="contacts_root">
            <p className="contacts_title">
                Рассчитаем стоимость автомобиля в мессенджерах или по телефону
            </p>
            <ContactLinks />
        </div>
    );
};
export default Contacts;
