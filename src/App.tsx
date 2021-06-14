import React, { FC } from 'react';

import Accordion from './components/Accordion';
import Rating from './components/Rating';

import './App.css';

const App = () => {
    return (
        <>
            <PageTitle title="It's a React componen" />
            <Rating value={1} />
            <Accordion title="Меню" />
            <Rating value={3} />
        </>
    );
};

interface IPageTitleProps {
    title: string;
}

const PageTitle: FC<IPageTitleProps> = ({ title }) => {
    return <h1>{title}</h1>;
};

export default App;
