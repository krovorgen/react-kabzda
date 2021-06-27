import React, { FC } from 'react';

import styles from './style.module.scss';

type accordionDataType = {
    title: string;
    value: any;
};

export interface IAccordionProps {
    title: string;
    collapsed: boolean;
    callBack: (value: boolean) => void;
    accordionData: accordionDataType[];
    onClick: (value: any) => void;
}

const Accordion: FC<IAccordionProps> = ({ title, collapsed, callBack, accordionData, onClick }) => {
    return (
        <>
            <AccordionTitle title={title} callBack={() => callBack(!collapsed)} />
            {!collapsed && <AccordionBody accordionData={accordionData} onClick={onClick} />}
        </>
    );
};

interface IAccordionTitleProps {
    title: string;
    callBack: () => void;
}

const AccordionTitle: FC<IAccordionTitleProps> = ({ title, callBack }) => {
    return (
        <h3 className={styles['accordion__title']} onClick={callBack}>
            {title}
        </h3>
    );
};

interface IAccordionBodyProps {
    accordionData: accordionDataType[];
    onClick: (value: any) => void;
}

const AccordionBody: FC<IAccordionBodyProps> = ({ accordionData, onClick }) => {
    return (
        <ul>
            {accordionData.map((item, idx) => (
                <li
                    onClick={() => {
                        onClick(item.value);
                    }}
                    key={idx}
                >
                    {item.title}
                </li>
            ))}
        </ul>
    );
};

export default Accordion;
