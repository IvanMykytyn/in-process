import {MainCalendar} from './MainCalendar';

import {Story} from '@storybook/react';

export default {
    title: 'Calendar',
    component: MainCalendar,
};

interface Props {
    range?: boolean;
}

const Template: Story<Props> = (args) => <MainCalendar {...args}/>;

export const Default = Template.bind({});

Default.args = {
    range: false
}