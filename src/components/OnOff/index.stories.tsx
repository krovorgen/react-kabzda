import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import OnOff, { ActiveColorType, IOnOffProps } from './index';

export default {
    title: 'Components/OnOff',
    component: OnOff,
} as Meta;

const Template: Story<IOnOffProps> = (args) => <OnOff {...args} />;

export const ChangeOnOff = () => {
    let [activeColor, setActiveColor] = useState<ActiveColorType>('Active');
    return <OnOff activeColor={activeColor} setActiveColor={setActiveColor} />;
};

export const activeColor = Template.bind({});
activeColor.args = {
    activeColor: 'Active',
    setActiveColor: (x) => x + x,
};

export const disabledColor = Template.bind({});
disabledColor.args = {
    activeColor: 'Disable',
    setActiveColor: (x) => x + x,
};
