import React, { FC, useState } from 'react';

import Accordion from './components/Accordion';
import Rating, { RatingValueType } from './components/Rating';

import OnOff from './components/OnOff';
import './App.css';
import UncontrolledAccordion from './components/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating';

const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

    return (
        <div className="app">
            <PageTitle title="It's a React componen" />
            <OnOff />

            <UncontrolledAccordion title={'Click me!'} />
            <UncontrolledRating />

            <Accordion
                title="Меню"
                collapsed={accordionCollapsed}
                callBack={setAccordionCollapsed}
            />
            <Rating value={ratingValue} onClick={setRatingValue} />
        </div>
    );
};

interface IPageTitleProps {
    title: string;
}

const PageTitle: FC<IPageTitleProps> = ({ title }) => {
    return <h1>{title}</h1>;
};

export default App;
