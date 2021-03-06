import React, { FC, useState } from 'react';

import Accordion from './components/Accordion';
import Rating, { RatingValueType } from './components/Rating';
import OnOff, { ActiveColorType } from './components/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating';
import UncontrolledOnOff from './components/UncontrolledOnOff';

import './App.css';

const App = () => {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [activeColor, setActiveColor] = useState<ActiveColorType>('Active');

    let accordionData = [
        { value: 1, title: '1' },
        { value: 2, title: '2' },
        { value: 3, title: '3' },
    ];

    const onClickAccordion = (value: any) => console.log(value);

    return (
        <div className="app">
            <PageTitle title="Uncontrolled component" />
            <UncontrolledAccordion title={'Click me!'} />
            <UncontrolledRating />
            <UncontrolledOnOff />

            <PageTitle title="Controlled component" />
            <Accordion
                title="Меню"
                collapsed={accordionCollapsed}
                callBack={setAccordionCollapsed}
                accordionData={accordionData}
                onClick={onClickAccordion}
            />
            <Rating value={ratingValue} onClick={setRatingValue} />
            <OnOff activeColor={activeColor} setActiveColor={setActiveColor} />
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
