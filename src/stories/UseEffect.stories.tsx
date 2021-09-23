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

export const ResetEffectExample = () => {
    let [counter, setCounter] = useState(1);
    console.log('render');

    useEffect(() => {
        console.log('effect occurred');

        return () => {
            console.log('reset effect');
        };
    }, []);

    return (
        <>
            <div>{counter}😅</div>
            <button onClick={() => setCounter(++counter)}>+</button>
        </>
    );
};

export const KeysTrackerExample = () => {
    let [text, setText] = useState('');
    console.log('Component rendered with ' + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            // setText((state) => state + ' ' + e.key);
            setText(text + ' ' + e.key);
        };
        window.document.addEventListener('keypress', handler);

        return () => {
            window.document.removeEventListener('keypress', handler);
        };
    }, [text]);

    return <>{text}😅</>;
};

export const SetTimeoutExample = () => {
    let [text, setText] = useState('');

    useEffect(() => {
        const idTimeout = setTimeout(() => {
            setText('3 seconds passed');
        }, 3000);

        return () => clearTimeout(idTimeout);
    }, []);

    return <>{text}😅</>;
};
