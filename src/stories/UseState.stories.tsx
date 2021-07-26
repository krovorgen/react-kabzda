import { Meta } from '@storybook/react';
import { useState } from 'react';

export default {
    title: 'UseState demo',
} as Meta;

const generateData = () => {
    console.log('generate');
    return 1;
};

export const Example = () => {
    let [counter, setCounter] = useState(generateData);

    return (
        <>
            {counter}
            <button onClick={() => setCounter((state) => state + 1)}>+</button>
        </>
    );
};
