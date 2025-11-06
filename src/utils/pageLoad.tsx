import { useEffect, useState } from 'react';

export const usePageLoad = () => {
    const [loadStatus, setLoadStatus] = useState({
        isDomReady: false,
        isPageLoaded: false,
        isContentRendered: false,
    });

    useEffect(() => {
        const handleDomReady = () => {
            setLoadStatus((prev) => ({ ...prev, isDomReady: true }));
        };

        const handlePageLoad = () => {
            setLoadStatus((prev) => ({ ...prev, isPageLoaded: true }));
        };

        if (document.readyState === 'interactive' || document.readyState === 'complete') {
            handleDomReady();
        }

        if (document.readyState === 'complete') {
            handlePageLoad();
        }

        document.addEventListener('DOMContentLoaded', handleDomReady);
        window.addEventListener('load', handlePageLoad);

        const checkContentRender = () => {
            requestAnimationFrame(() => {
                setLoadStatus((prev) => ({ ...prev, isContentRendered: true }));
            });
        };

        const renderTimer = setTimeout(checkContentRender, 100);

        return () => {
            document.removeEventListener('DOMContentLoaded', handleDomReady);
            window.removeEventListener('load', handlePageLoad);
            clearTimeout(renderTimer);
        };
    }, []);

    return loadStatus;
};
