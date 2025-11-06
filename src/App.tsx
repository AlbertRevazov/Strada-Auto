import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { usePageLoad } from './utils/pageLoad';
import Loader from './common/loader';

const LazyMain = React.lazy(() => import('./pages/main'));
const LazyNotFound = React.lazy(() => import('./pages/notFound'));

function App() {
    const { isPageLoaded, isContentRendered } = usePageLoad();

    if (!isContentRendered) {
        return <>{isPageLoaded && !isContentRendered && <Loader />}</>;
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LazyMain />} />
                    <Route path="*" element={<LazyNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
