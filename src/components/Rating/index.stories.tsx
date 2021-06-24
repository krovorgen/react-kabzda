import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Rating, { IRatingProps, RatingValueType } from './index';

export default {
    title: 'Components/Rating',
    component: Rating,
} as Meta;

const Template: Story<IRatingProps> = (args) => <Rating {...args} />;

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(0);
    return <Rating value={rating} onClick={setRating} />;
};

export const emptyStars = Template.bind({});
emptyStars.args = {
    value: 0,
    onClick: (x) => x + x,
};

export const oneStars = Template.bind({});
oneStars.args = {
    value: 1,
    onClick: (x) => x + x,
};

export const twoStars = Template.bind({});
twoStars.args = {
    value: 2,
    onClick: (x) => x + x,
};

export const threeStars = Template.bind({});
threeStars.args = {
    value: 3,
    onClick: (x) => x + x,
};

export const fourStars = Template.bind({});
fourStars.args = {
    value: 4,
    onClick: (x) => x + x,
};

export const fiveStars = Template.bind({});
fiveStars.args = {
    value: 5,
    onClick: (x) => x + x,
};
