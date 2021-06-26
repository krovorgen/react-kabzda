import React from 'react';
import { Meta } from '@storybook/react';

export default {
    title: 'input',
} as Meta;

export const UncontrolledInput = () => <input type="text" />;
export const ControlledInput = () => <input type="text" value={'maksim'} />;
