import React from 'react';
import './styles.css';

interface ICardProps {
    title: string;
    subtitle?: string;
    img?: string;
    power?: string;
    drive?: string;
    volume?: string;
    acceleration?: string;
    gearbox?: string;
    icon?: string;
}

interface ISpecItem {
    label: string;
    value?: string;
    unit?: string;
}

export const DirectoryCard: React.FC<ICardProps> = ({
    title,
    subtitle,
    img,
    acceleration,
    drive,
    gearbox,
    power,
    volume,
}) => {
    const renderImage = (className: string, alt: string) =>
        img ? <img className={className} src={img} loading="lazy" alt={alt} /> : null;

    const specs: ISpecItem[] = [
        { label: 'Разгон до 100 км/ч', value: acceleration, unit: ' с' },
        { label: 'Привод', value: drive },
        { label: 'Коробка', value: gearbox },
        { label: 'Мощность', value: power, unit: ' л.с.' },
        { label: 'Объем', value: volume, unit: ' л' },
    ].filter((item) => item.value);

    return (
        <div className="directory-card">
            {renderImage('directory-card__image', title || 'Car image')}
            <h3 className="directory-card__title" data-swiper-parallax="-20%">
                {title}
            </h3>
            {subtitle && <h4 className="directory-card__subtitle">{subtitle}</h4>}
            <div className="directory-card__specs" data-swiper-parallax="-100%">
                <ul className="directory-card__specs-list">
                    {specs.map((item, index) => (
                        <li key={index} className="directory-card__spec-item">
                            {item.label}:{' '}
                            <strong>
                                {item.value}
                                {item.unit || ''}
                            </strong>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
