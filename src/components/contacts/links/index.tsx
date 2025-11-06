import { contactLinks } from '../../../data';
import './styles.css';

export const ContactLinks = () => {
    return (
        <div className="contact-links">
            {contactLinks.map((link) => (
                <div key={link.title}>
                    {link.link ? (
                        <div className="contact-links__item">
                            <img src={link.img} alt="link icon" width={25} />
                            <a href={link.link} target="_blank" rel="noopener noreferrer">
                                {link.title}
                            </a>
                        </div>
                    ) : (
                        <div className="contact-links__info">
                            <img src={link.img} alt="link icon" width={25} />
                            <p className="contact-links__description">{link.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
