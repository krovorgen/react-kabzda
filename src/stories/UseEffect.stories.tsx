import { Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

export default {
    title: 'useEffect demo',
} as Meta;

export const Example = () => {
    let [counter, setCounter] = useState(1);
    let [fake, setFake] = useState(1);

    console.log('render');

    useEffect(() => {
        console.log('useEffect every render');
        document.title = `${counter}`;
    });

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = `${counter}`;
    }, [counter]);

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = `${counter}`;
    }, []);

    return (
        <>
            {counter} {fake}
            <button onClick={() => setCounter(++counter)}>+</button>
            <button onClick={() => setFake(++fake)}>+ fake</button>
        </>
    );
};

export const ExampleSetTimeout = () => {
    let [counter, setCounter] = useState(1);
    let [fake, setFake] = useState(1);

    console.log('render');

    useEffect(() => {
        setInterval(() => {
            setCounter((state) => state + 1);
        }, 1000);
    }, []);

    return (
        <>
            <div>{counter}😅</div> {fake}
            <button onClick={() => setCounter(++counter)}>+</button>
            <button onClick={() => setFake(++fake)}>+ fake</button>
        </>
    );
};
