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
                <div className="card_dir_root">
                    <img
                        className="card_dir_image"
                        src={img}
                        loading="lazy"
                        alt="service card image"
                    />
                    <h3 className="card_dir_title">{title}</h3>
                    <ul>
                        <li>{acceleration}</li>
                        <li>{drive}</li>
                        <li>{gearbox}</li>
                        <li>{power}</li>
                        <li>{volume}</li>
                    </ul>
                </div>
            );
    }
};
