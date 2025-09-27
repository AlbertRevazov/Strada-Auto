import React from 'react';
import { contactLinks } from '../../../data';
import './styles.css';

export const ContactLinks = () => {
    return (
        <div className="contact_links_root">
            {contactLinks.map((link) => (
                <div key={link.title}>
                    {link.link ? (
                        <div className="contact_link">
                            <img src={link.img} alt="link icon" width={25} />
                            <a href={link.link} target="_blank">
                                {link.title}
                            </a>
                        </div>
                    ) : (
                        <div className="contact_link">
                            <img src={link.img} alt="link icon" width={25} />
                            <p>{link.description}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
