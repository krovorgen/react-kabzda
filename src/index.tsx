import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './index.scss';
const start = Date.now();
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
const end = Date.now();

console.log(end - start);
