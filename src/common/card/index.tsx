import React from 'react';
import './styles.css';

interface ICardProps {
    type: 'card' | 'directory';
    title: string;
    subtitle?: string;
    img?: string;
    power?: string;
    drive?: string;
    volume?: string;
    acceleration?: string;
    gearbox?: string;
}

export const Card: React.FC<ICardProps> = ({
    title,
    subtitle,
    img,
    type,
    acceleration,
    drive,
    gearbox,
    power,
    volume,
}) => {
    switch (type) {
        case 'card':
            return (
                <div className="card_root">
                    {!!img && (
                        <img
                            className="card_image"
                            src={img}
                            loading="lazy"
                            alt="service card image"
                        />
                    )}
                    <h3 className="card_title">{title}</h3>
                    <h4 className="card_subtitle">{subtitle}</h4>
                </div>
            );

        default:
            return (
                <div className="directory_card_root">
                    <img
                        className="directory_card_image"
                        src={img}
                        loading="lazy"
                        alt="service card image"
                    />
                    <h3 className="directory_card_title">{title}</h3>
                    <ul className="directory_item">
                        <li className="directory_item_key">Разон до ста - {acceleration}s</li>
                        <li className="directory_item_key">Привод - {drive}</li>
                        <li className="directory_item_key">Коробка - {gearbox}</li>
                        <li className="directory_item_key">Мощность - {power} л.с</li>
                        <li className="directory_item_key">Обьем - {volume} л</li>
                    </ul>
                </div>
            );
    }
};
