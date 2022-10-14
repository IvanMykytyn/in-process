import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';

export default {
    title: 'Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

 export const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args}>{<div><img src={'https://miro.medium.com/max/800/0*rrLH9s9KUL994QBv'}/></div>}</Modal>