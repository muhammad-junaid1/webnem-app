import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WidgetsProvider from './context/WidgetsProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WidgetsProvider>
        <App />
    </WidgetsProvider>
);