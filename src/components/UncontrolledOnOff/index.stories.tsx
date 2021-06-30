import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import UncontrolledOnOff, { IUncontrolledOnOffOnOffProps } from './index';

export default {
    title: 'Components/UncontrolledOnOffOnOff',
    component: UncontrolledOnOff,
} as Meta;

const Template: Story<IUncontrolledOnOffOnOffProps> = (args) => <UncontrolledOnOff {...args} />;

export const change = Template.bind({});
