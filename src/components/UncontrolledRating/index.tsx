import React, { FC, useState } from 'react';

import { RatingValueType } from '../Rating';

import styles from './style.module.scss';

interface IUncontrolledRatingProps {}

const UncontrolledRating: FC<IUncontrolledRatingProps> = () => {
    const [value, setValue] = useState<RatingValueType>(0);
    return (
        <>
            <Star selected={value > 0} callBack={() => setValue(1)} />
            <Star selected={value > 1} callBack={() => setValue(2)} />
            <Star selected={value > 2} callBack={() => setValue(3)} />
            <Star selected={value > 3} callBack={() => setValue(4)} />
            <Star selected={value > 4} callBack={() => setValue(5)} />
        </>
    );
};

interface IStarProps {
    selected: boolean;
    callBack: () => void;
}

const Star: FC<IStarProps> = ({ selected, callBack }) => {
    return (
        <span
            className={`${styles['star']} ${selected && styles['star--active']}`}
            onClick={() => callBack()}
        >
            {' '}
        </span>
    );
};

export default UncontrolledRating;
