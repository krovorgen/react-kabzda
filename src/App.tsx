import React, { FC, useState } from 'react';

import Accordion from './components/Accordion';
import Rating, { RatingValueType } from './components/Rating';
import OnOff from './components/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating';
import UncontrolledOnOff, { ActiveColorType } from './components/UncontrolledOnOff';

import './App.css';

const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [activeColor, setActiveColor] = useState<ActiveColorType>('Active');

    return (
        <div className="app">
            <PageTitle title="Uncontrolled component" />
            <UncontrolledAccordion title={'Click me!'} />
            <UncontrolledRating />
            <UncontrolledOnOff activeColor={activeColor} setActiveColor={setActiveColor} />

            <PageTitle title="Controlled component" />
            <Accordion
                title="Меню"
                collapsed={accordionCollapsed}
                callBack={setAccordionCollapsed}
            />
            <Rating value={ratingValue} onClick={setRatingValue} />
            <OnOff />
        </div>
    );
};

interface IPageTitleProps {
    title: string;
}

const PageTitle: FC<IPageTitleProps> = ({ title }) => {
    const titleStyle = {
        marginTop: '30px',
    };
    return <h1 style={titleStyle}>{title}</h1>;
};

export default App;
