import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from './Toggle';

export default {
    title: 'Toggle',
    component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args}/>

export const NotToggled = Template.bind({});

NotToggled.args = {
    checked: false,
    label: 'Toggle',
};

export const Toggled = Template.bind({});

Toggled.args = {
    checked: true,
    label: 'Toggle',
};