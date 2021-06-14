import React, { FC } from 'react';

interface IAccordionProps {
    title: string;
}

const Accordion: FC<IAccordionProps> = ({ title }) => {
    return (
        <>
            <AccordionTitle title={title} />
            <AccordionBody />
        </>
    );
};

interface IAccordionTitleProps {
    title: string;
}

const AccordionTitle: FC<IAccordionTitleProps> = ({ title }) => {
    return <h3>{title}</h3>;
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
