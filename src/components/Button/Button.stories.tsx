import {Button} from './Button';

import {Story} from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
};

interface Props {
    label: string;
    children: string;
    variant: boolean;
    loading: boolean
}

const Template: Story<Props> = (args) => <Button type={'button'} {...args}/>;

export const Default = Template.bind({});

Default.args = {
    children: 'Default',
    variant: false,
};

export const Pressed = Template.bind({});

Pressed.args = {
    children: 'Pressed',
    variant: true,
};

export const Loading = Template.bind({});

Loading.args = {
    children: 'Loading',
    loading: true,
    variant: true,
};