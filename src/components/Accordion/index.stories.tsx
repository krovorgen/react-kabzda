import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import Accordion, { IAccordionProps } from './index';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as Meta;

const Template: Story<IAccordionProps> = (args) => <Accordion {...args} />;

const onClickCallback = action('some item was clicked');

export const ChangeAccordion = () => {
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    return (
        <Accordion
            title={'Click me!'}
            collapsed={accordionCollapsed}
            callBack={setAccordionCollapsed}
            accordionData={[
                { value: 1, title: '1' },
                { value: 2, title: '2' },
                { value: 3, title: '3' },
            ]}
            onClick={onClickCallback}
        />
    );
};

export const collapsedAccordion = Template.bind({});
collapsedAccordion.args = {
    title: 'Click!',
    collapsed: true,
    callBack: (x) => true,
    accordionData: [
        { value: 1, title: '1' },
        { value: 2, title: '2' },
        { value: 3, title: '3' },
    ],
    onClick: onClickCallback,
};
export const UncollapsedAccordion = Template.bind({});
UncollapsedAccordion.args = {
    title: 'Click!',
    collapsed: false,
    callBack: (x) => true,
    accordionData: [
        { value: 1, title: '1' },
        { value: 2, title: '2' },
        { value: 3, title: '3' },
    ],
    onClick: onClickCallback,
};
