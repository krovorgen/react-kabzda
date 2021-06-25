import React from 'react';
import { Story, Meta } from '@storybook/react';
import UncontrolledAccordion, { IUncontrolledAccordionProps } from './index';

export default {
    title: 'Components/UncontrolledAccordion',
    component: UncontrolledAccordion,
} as Meta;

const Template: Story<IUncontrolledAccordionProps> = (args) => <UncontrolledAccordion {...args} />;

export const Change = Template.bind({});

Change.args = {
    defaultStatus: false,
    title: 'Click me!',
};
