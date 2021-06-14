import React, { FC, useState } from 'react';

interface IRatingProps {
    value: number;
}

const Rating: FC<IRatingProps> = ({ value }) => {
    if (value === 1) {
        return (
            <>
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </>
        );
    }
    if (value === 2) {
        return (
            <>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
                <Star selected={false} />
            </>
        );
    }
    if (value === 3) {
        return (
            <>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
                <Star selected={false} />
            </>
        );
    }
    if (value === 4) {
        return (
            <>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={false} />
            </>
        );
    }
    if (value === 5) {
        return (
            <>
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
                <Star selected={true} />
            </>
        );
    }
    return (
        <>
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
            <Star selected={false} />
        </>
    );
};

interface IStarProps {
    selected: boolean;
}

const Star: FC<IStarProps> = ({ selected }) => {
    return <span>{selected ? <b>Star </b> : 'Star '}</span>;
};

export default Rating;
