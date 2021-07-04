import React, { FC, useReducer } from 'react';
import reducer from './reducer';

export interface IUncontrolledAccordionProps {
    title: string;
    defaultStatus?: boolean;
}

const UncontrolledAccordion: FC<IUncontrolledAccordionProps> = ({ title, defaultStatus }) => {
    let [state, dispatch] = useReducer(
        reducer,
        defaultStatus ? { collapsed: defaultStatus } : { collapsed: true }
    );

    return (
        <>
            <AccordionTitle title={title} setDisclosure={() => dispatch({ type: 'TOGGLE' })} />
            {!state.collapsed && <AccordionBody />}
        </>
    );
};

interface IUncontrolledAccordionTitleProps {
    title: string;
    setDisclosure: () => void;
}

const titleStyle = {
    cursor: 'pointer',
};

const AccordionTitle: FC<IUncontrolledAccordionTitleProps> = ({ title, setDisclosure }) => {
    return (
        <h3 style={titleStyle} onClick={setDisclosure}>
            {title}
        </h3>
    );
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

export default UncontrolledAccordion;
