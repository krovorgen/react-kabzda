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
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
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

const Star = () => {
    return <p>Star</p>;
};

export default App;
