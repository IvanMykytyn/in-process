import { ComponentStory, ComponentMeta } from '@storybook/react';
import moment from 'moment';

import { TimePicker } from './TimePicker';

export default {
    title: 'Time Picker',
    component: TimePicker,
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => <TimePicker {...args}/>

export const Default = Template.bind({});

Default.args = {
    time: moment(),
    handleChange: (e) => {}

};

export const Error = Template.bind({});

Error.args = {
    time: moment(),
    error: true,
    errorText: 'Invalid Time Format',
    handleChange: (e) => {}
};
