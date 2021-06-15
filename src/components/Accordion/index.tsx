import React, { FC } from 'react';

interface IAccordionProps {
    title: string;
    collapsed: boolean;
    callBack: (value: boolean) => void;
}

const Accordion: FC<IAccordionProps> = ({ title, collapsed, callBack }) => {
    return (
        <>
            <AccordionTitle title={title} callBack={() => callBack(!collapsed)} />
            {!collapsed && <AccordionBody />}
        </>
    );
};

interface IAccordionTitleProps {
    title: string;
    callBack: () => void;
}

const AccordionTitle: FC<IAccordionTitleProps> = ({ title, callBack }) => {
    return <h3 onClick={callBack}>{title}</h3>;
};

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
};

export default Accordion;
