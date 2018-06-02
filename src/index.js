// Polyfills
import './polyfills';

// Styles
import './styles.scss';
import './styles/main.scss';

// Sample data
import './data/products.json';

// Vendor libraries
import React from 'react';
import { render } from 'react-dom';

// Project components
import App from './app';

render(
    <App />,
    document.getElementById('root')
);
