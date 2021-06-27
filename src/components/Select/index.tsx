import React, { FC } from 'react';

import styles from './style.module.scss';

type SelectDataType = {
    title: string;
    value: any;
};

interface ISelectProps {
    value: any;
    onChange: (value: any) => void;
    selectData: SelectDataType[];
}

const Select: FC<ISelectProps> = ({ value, onChange, selectData }) => {
    return (
        <>
            <div>{}</div>
            {selectData.map((item) => (
                <div>{item.title}</div>
            ))}
        </>
    );
};

export default Select;
