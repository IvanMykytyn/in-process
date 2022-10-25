import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

export default {
    title: 'Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}>{<div><img src={'https://miro.medium.com/max/800/0*rrLH9s9KUL994QBv'}/></div>}</Modal>

export const NotActive = Template.bind({});

NotActive.args = {
    checked: false
};

export const Active = Template.bind({});

Active.args = {
    checked: true
};