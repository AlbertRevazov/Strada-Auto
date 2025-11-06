import React from 'react';
import './styles.css';

const Loader = () => {
    return (
        <section className="loader_root">
            <img className="loader_img" src="/svg/loader.svg" alt="loader" loading="lazy" />
        </section>
    );
};

export default Loader;
