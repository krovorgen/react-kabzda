import React, { FC, useEffect, useState } from 'react';

import styles from './style.module.scss';

export interface IClockProps {}

const getZero = (num: number) => (num < 10 ? '0' + num : num);

const Clock: FC<IClockProps> = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            console.log('tick');
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    let seconds = getZero(date.getSeconds());
    let minutes = getZero(date.getMinutes());
    let hours = getZero(date.getHours());

    return (
        <>
            <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>
        </>
    );
};

export default Clock;
