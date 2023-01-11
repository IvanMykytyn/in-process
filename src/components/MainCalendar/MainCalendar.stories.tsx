import { MainCalendar } from "./MainCalendar";

import { Story } from "@storybook/react";
import moment, { Moment } from "moment";

export default {
  title: "Calendar Picker",
  component: MainCalendar,
};

interface Props {
  range?: boolean;
  handleClickAway: () => void;
  handleChange: (selectedDate: Date) => void;
  date: Moment | null;
}

const Template: Story<Props> = (args) => <MainCalendar {...args} />;

export const Default = Template.bind({});

Default.args = {
  date: moment(),
  handleChange: (e) => {},
  handleClickAway: () => {},
  range: false,
};
