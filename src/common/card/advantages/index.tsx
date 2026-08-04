import React from 'react';
import './styles.css';

interface ICardProps {
    title: string;
    subtitle?: string;
}

export const AdvantagesCard: React.FC<ICardProps> = ({ title, subtitle }) => {
    return (
        <div className="advantages-card">
            <h3 className="advantages-card__title">{title}</h3>
            <h4 className="advantages-card__subtitle">{subtitle}</h4>
        </div>
    );
};
