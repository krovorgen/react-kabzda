import React, { FC, useState, KeyboardEvent, useEffect } from 'react';

import styles from './style.module.scss';

type SelectDataType = {
    title: string;
    value: any;
};

export interface ISelectProps {
    value?: any;
    onChange: (value: any) => void;
    selectData: SelectDataType[];
}

const Select: FC<ISelectProps> = ({ value, onChange, selectData }) => {
    const [active, setActive] = useState(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(value);

    const selectedItem = selectData.find((item) => item.value === value);
    const hoveredItem = selectData.find((item) => item.value === hoveredElementValue);

    useEffect(() => {
        setHoveredElementValue(value);
    }, [value]);

    const toggleItems = () => setActive(!active);
    const onItemClick = (value: string) => {
        onChange(value);
        toggleItems();
    };

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < selectData.length; i++) {
                if (selectData[i].value === hoveredElementValue) {
                    const pretendentElement =
                        e.key === 'ArrowDown' ? selectData[i + 1] : selectData[i - 1];
                    pretendentElement && onChange(pretendentElement.value);
                    return;
                }
            }
            if (!selectedItem) {
                onChange(selectData[0].value);
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    };

    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Kiev</option>
                <option value="3">Moscow</option>
            </select>
            <div className={`${styles['select']}`} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={styles['select__title']} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}
                </span>
                {active && (
                    <ul className={styles['select__items']}>
                        {selectData.map((item) => (
                            <li
                                className={`${styles['select__item']} ${
                                    hoveredItem === item ? styles['select__item--selected'] : ''
                                }`}
                                onMouseEnter={() => setHoveredElementValue(item.value)}
                                onClick={() => onItemClick(item.value)}
                                key={Math.random()}
                            >
                                {item.title}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Select;
