import React from 'react';
import './styles.css';

interface ICardProps {
    title: string;
    subtitle?: string;
    img?: string;
}

export const ServiceCard: React.FC<ICardProps> = ({ title, subtitle, img }) => {
    return (
        <div className="services-card">
            {img && <div className="services-card__icon">{img}</div>}
            <h3 className="services-card__title">{title}</h3>
            {subtitle && <p className="services-card__description">{subtitle}</p>}
        </div>
    );
};
