import React, { ChangeEvent, useRef, useState } from 'react';
import { Meta } from '@storybook/react';

export default {
    title: 'input',
} as Meta;

export const UncontrolledInput = () => <input type="text" />;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState<string>('');
    const valueChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    return (
        <>
            <input type="text" value={value} onChange={valueChange} /> - {value}
        </>
    );
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const onSave = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    };
    return (
        <>
            <input type="text" ref={inputRef} /> / <button onClick={onSave}>save</button> - {value}
        </>
    );
};

export const ControlledInputWithFixedValue = () => <input type="text" value={'maksim'} />;
