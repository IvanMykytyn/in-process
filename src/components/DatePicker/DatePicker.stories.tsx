import { DatePicker } from "./DatePicker";

import { Story } from "@storybook/react";
import moment, { Moment } from "moment";

export default {
  title: "Date Picker",
  component: DatePicker,
};

interface Props {
  date: Moment | null;
  handleChange: (newValue: Moment | null) => void;
  disabled?: boolean;
  error: boolean;
  errorText?: string;
}

const Template: Story<Props> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});

Default.args = {
  date: moment(),
  handleChange: (e) => {},
};

export const Error = Template.bind({});

Error.args = {
  date: moment(),
  handleChange: (e) => {},
  error:true,
  errorText: 'Invalid Date'
};