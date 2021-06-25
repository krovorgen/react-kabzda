import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Accordion, { IAccordionProps } from './index';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as Meta;

const Template: Story<IAccordionProps> = (args) => <Accordion {...args} />;

export const ChangeAccordion = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    return (
        <Accordion
            title={'Click me!'}
            collapsed={accordionCollapsed}
            callBack={setAccordionCollapsed}
        />
    );
};

export const collapsedAccordion = Template.bind({});
collapsedAccordion.args = {
    title: 'Click!',
    collapsed: true,
    callBack: (x) => true,
};
export const UncollapsedAccordion = Template.bind({});
UncollapsedAccordion.args = {
    title: 'Click!',
    collapsed: false,
    callBack: (x) => true,
};
