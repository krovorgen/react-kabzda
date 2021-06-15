import React, { FC } from 'react';

interface IAccordionProps {
    title: string;
    collapsed: boolean;
}

const Accordion: FC<IAccordionProps> = ({ title, collapsed }) => {
    return (
        <>
            <AccordionTitle title={title} />
            {!collapsed ? <AccordionBody /> : ''}
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
