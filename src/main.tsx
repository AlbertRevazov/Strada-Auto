import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const LazyApp = React.lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<LazyApp />);
