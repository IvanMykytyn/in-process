import {Button} from './Button';

import {Story} from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
};

interface Props{
    children: string;
    variant: boolean;
    label: string;
}

const Template: Story<Props> = (args) => <Button {...args}/>;

export const Default = Template.bind({});

Default.args = {
    children: 'Press me',
    variant: false,
};

export const Pressed = Template.bind({});

Pressed.args = {
    children: 'Press me',
    variant: true,
};