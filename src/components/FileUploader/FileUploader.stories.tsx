import {FileUploader} from './FileUploader';

import {Story} from '@storybook/react';

export default {
    title: 'FileUploader',
    component: FileUploader,
};

interface Props {
    variant: boolean;
    loading: boolean;
}

const Template: Story<Props> = (args) => <FileUploader {...args}/>;

export const Default = Template.bind({});

Default.args = {
    variant: false
};

export const Active = Template.bind({});

Active.args = {
    variant: true
};

export const Loading = Template.bind({});

Loading.args = {
    variant: false,
    loading: true
};