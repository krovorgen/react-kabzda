import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Select, { ISelectProps } from './index';
import '../../index.scss';

export default {
    title: 'Components/Select',
    component: Select,
} as Meta;

export const WithValue = () => {
    const [value, setValue] = useState<string | null>('2');
    return (
        <Select
            onChange={setValue}
            value={value}
            selectData={[
                { value: '1', title: 'Minsk' },
                { value: '2', title: 'Kiev' },
                { value: '3', title: 'Moscow' },
            ]}
        />
    );
};

export const WithoutValue = () => {
    const [value, setValue] = useState<string | null>(null);
    return (
        <Select
            onChange={setValue}
            value={value}
            selectData={[
                { value: '1', title: 'Minsk' },
                { value: '2', title: 'Kiev' },
                { value: '3', title: 'Moscow' },
            ]}
        />
    );
};
