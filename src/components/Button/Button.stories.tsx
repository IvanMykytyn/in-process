import {Button} from './Button';

import {Story} from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
};

interface Props {
    label: string;
    children: string;
    isPressed: boolean;
    loading: boolean
    variant: string
}

const Template: Story<Props> = (args) => <Button type={'button'} {...args}/>;

export const Default = Template.bind({});

Default.args = {
    children: 'Default',
    isPressed: false,
};

export const Pressed = Template.bind({});

Pressed.args = {
    children: 'Pressed',
    isPressed: true,
};

export const Loading = Template.bind({});

Loading.args = {
    children: 'Loading',
    loading: true,
    isPressed: true,
};

export const Contained = Template.bind({});

Contained.args = {
    children: 'Contained',
    isPressed: false,
    variant: 'contained'
};