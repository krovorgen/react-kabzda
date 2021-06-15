import React, { FC } from 'react';
import styles from '../UncontrolledRating/style.module.css';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;

interface IRatingProps {
    value: RatingValueType;
    onClick: (value: RatingValueType) => void;
}

const Rating: FC<IRatingProps> = ({ value, onClick }) => {
    return (
        <>
            <Star selected={value > 0} onClick={() => onClick(1)} />
            <Star selected={value > 1} onClick={() => onClick(2)} />
            <Star selected={value > 2} onClick={() => onClick(3)} />
            <Star selected={value > 3} onClick={() => onClick(4)} />
            <Star selected={value > 4} onClick={() => onClick(5)} />
        </>
    );
};

interface IStarProps {
    selected: boolean;
    onClick: () => void;
}

const Star: FC<IStarProps> = ({ selected, onClick }) => {
    return (
        <span
            className={`${styles['star']} ${selected && styles['star--active']}`}
            onClick={onClick}
        >
            {' '}
        </span>
    );
};

export default Rating;
