import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import UncontrolledOnOffOnOff, { IUncontrolledOnOffOnOffProps } from './index';

export default {
    title: 'Components/UncontrolledOnOffOnOff',
    component: UncontrolledOnOffOnOff,
} as Meta;

const Template: Story<IUncontrolledOnOffOnOffProps> = (args) => (
    <UncontrolledOnOffOnOff {...args} />
);

export const change = Template.bind({});
