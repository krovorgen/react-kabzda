import React from 'react';
import { Meta, Story } from '@storybook/react';
import Clock, { IClockProps } from './index';

export default {
    title: 'Components/Clock',
    component: Clock,
} as Meta;

const Template: Story<IClockProps> = (args) => <Clock {...args} />;

export const ClockDigitalExample = () => {
    return <Clock mode={'digital'} />;
};

export const ClockAnalogExample = () => {
    return <Clock mode={'analog'} />;
};
