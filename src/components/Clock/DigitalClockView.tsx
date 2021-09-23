import React, { FC } from 'react';

import { DigitalClockViewType } from './index';

export const DigitalClockView: FC<DigitalClockViewType> = ({ hours, minutes, seconds }) => (
    <>
        <span>{hours}</span> : <span>{minutes}</span> : <span>{seconds}</span>
    </>
);
