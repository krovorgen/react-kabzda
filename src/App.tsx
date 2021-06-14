import React from 'react';
import './App.css';

const App = () => {
    return (
        <>
            It is APP component
            <Rating />
            <Accordion />
        </>
    );
};

const Rating = () => {
    return (
        <>
            <p>star</p>
            <p>star</p>
            <p>star</p>
            <p>star</p>
            <p>star</p>
        </>
    );
};

const Accordion = () => {
    return (
        <>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </>
    );
};

export default App;
