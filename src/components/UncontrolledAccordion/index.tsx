import React, { FC, useState } from 'react';

interface IUncontrolledAccordionProps {
    title: string;
}

const UncontrolledAccordion: FC<IUncontrolledAccordionProps> = ({ title }) => {
    const [disclosure, setDisclosure] = useState<boolean>(true);
    return (
        <>
            <AccordionTitle title={title} setDisclosure={() => setDisclosure(!disclosure)} />
            {!disclosure && <AccordionBody />}
        </>
    );
};

interface IUncontrolledAccordionTitleProps {
    title: string;
    setDisclosure: () => void;
}

const AccordionTitle: FC<IUncontrolledAccordionTitleProps> = ({ title, setDisclosure }) => {
    return <h3 onClick={setDisclosure}>{title}</h3>;
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
