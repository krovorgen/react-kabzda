import React from 'react';
import { Story, Meta } from '@storybook/react';
import UncontrolledRating, { IUncontrolledRatingProps } from './index';

export default {
    title: 'Components/UncontrolledRating',
    component: UncontrolledRating,
} as Meta;

const Template: Story<IUncontrolledRatingProps> = (args) => <UncontrolledRating {...args} />;

export const change = Template.bind({});
change.args = {};
