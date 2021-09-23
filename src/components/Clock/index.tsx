import React, { FC, useEffect, useState } from 'react';
import { DigitalClockView } from './DigitalClockView';
import { AnalogClockView } from './AnalogClockView';

export interface IClockProps {
    mode?: 'digital' | 'analog';
}

const getZero = (num: number) => (num < 10 ? '0' + num : num);

export const Clock: FC<IClockProps> = ({ mode }) => {
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
            {mode === 'digital' ? (
                <DigitalClockView seconds={seconds} minutes={minutes} hours={hours} />
            ) : (
                <AnalogClockView date={date} />
            )}
        </>
    );
};

export type DigitalClockViewType = {
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
};

export type AnalogClockViewType = {
    date: Date;
};
