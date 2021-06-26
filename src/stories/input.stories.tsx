import React, { ChangeEvent, useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('');

    const parentValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value);
    };

    return <input type="text" value={parentValue} onChange={parentValueHandler} />;
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true);

    const parentValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked);
    };
    return (
        <>
            <input type="checkbox" checked={parentValue} onChange={parentValueHandler} />
            <input
                type="checkbox"
                checked={parentValue}
                onChange={() => console.log(parentValue)}
            />
        </>
    );
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);

    const parentValueHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value);
    };

    return (
        <select value={parentValue} onChange={parentValueHandler}>
            <option>None</option>
            <option value={1}>Minks</option>
            <option value={2}>Lida</option>
            <option value={2}>Moscow</option>
        </select>
    );
};
