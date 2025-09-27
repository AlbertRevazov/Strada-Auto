import React from 'react';

const LazyWelcome = React.lazy(() => import('../../components/welcome'));
const LazyAdvantages = React.lazy(() => import('../../components/advantages'));
const LazyDirectory = React.lazy(() => import('../../components/directory'));
const LazyServices = React.lazy(() => import('../../components/services'));
const LazyContacts = React.lazy(() => import('../../components/contacts'));

export const Main = () => {
    return (
        <>
            <LazyWelcome />
            <LazyAdvantages />
            <LazyServices />
            <LazyDirectory />
            <LazyContacts />
        </>
    );
};
