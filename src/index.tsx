import React from 'react';
import ReactDOM from 'react-dom';
import GA4React from 'ga-4-react';
import App from './App';

const ga4react = new GA4React('G-FJ9P97S85W');

ga4react.initialize();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
