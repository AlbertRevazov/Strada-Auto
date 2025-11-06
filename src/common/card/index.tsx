import React from 'react';
import './styles.css';

interface ICardProps {
    idx?: number;
    type: 'advantages' | 'directory' | 'services';
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

export const Card: React.FC<ICardProps> = ({
    idx,
    title,
    subtitle,
    img,
    type,
    acceleration,
    drive,
    gearbox,
    power,
    volume,
    icon
}) => {
    const isEven = (idx ?? 0) % 2 === 0;

    const renderImage = (className: string, alt: string) =>
        img ? <img className={className} src={img} loading="lazy" alt={alt} /> : null;

    const renderAdvantagesCard = () => (
        <div className={`advantages-card ${isEven ? '' : 'advantages-card--odd'}`}>
            {renderImage('advantages-card__image', title || 'Advantages image')}
            <h3 className="advantages-card__title">{title}</h3>
            {subtitle && (
                <h4 className={`advantages-card__subtitle ${!isEven ? 'advantages-card__subtitle--odd' : ''}`}>
                    {subtitle}
                </h4>
            )}
        </div>
    );

    const renderServicesCard = () => (
        <div className="services-card">
            {img && <div className="services-card__icon">{img}</div>}
            <h3 className="services-card__title">{title}</h3>
            {subtitle && <p className="services-card__description">{subtitle}</p>}
        </div>
    );

    const renderDirectoryCard = () => {
        const specs: ISpecItem[] = [
            { label: 'Разгон до 100 км/ч', value: acceleration, unit: ' с' },
            { label: 'Привод', value: drive },
            { label: 'Коробка', value: gearbox },
            { label: 'Мощность', value: power, unit: ' л.с.' },
            { label: 'Объем', value: volume, unit: ' л' },
        ].filter(item => item.value);

        return (
            <div className="directory-card">
                {renderImage('directory-card__image', title || 'Car image')}
                <h3 className="directory-card__title">{title}</h3>
                {subtitle && <h4 className="directory-card__subtitle">{subtitle}</h4>}
                <div className="directory-card__specs">
                    <ul className="directory-card__specs-list">
                        {specs.map((item, index) => (
                            <li key={index} className="directory-card__spec-item">
                                {item.label}: <strong>{item.value}{item.unit || ''}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    switch (type) {
        case 'advantages':
            return renderAdvantagesCard();
        case 'services':
            return renderServicesCard();
        case 'directory':
            return renderDirectoryCard();
        default:
            return null;
    }
};
