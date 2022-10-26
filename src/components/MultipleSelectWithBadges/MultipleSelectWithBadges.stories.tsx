import { MultipleSelectWithBadges } from './MultipleSelectWithBadges';

import { Story } from '@storybook/react';
import { Dispatch, SetStateAction } from 'react';
import { AutocompleteRenderInputParams, TextField } from '@mui/material';

export default {
  title: 'Multiple Select With Badges',
  component: MultipleSelectWithBadges,
  argTypes: {
    children: {
      table: { disable: true },
    },
    hiddenLabel: {
      table: { disable: true },
    },
    sx: {
      table: { disable: true },
    },
    color: {
      table: { disable: true },
    },
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
    helperText: { control: 'text' },
    value: { control: 'text' },
  },
};

interface Props {
  options: Array<string>;
  setSelectedOptions: Dispatch<SetStateAction<Array<string>>>;
  noOptionsText?: string;
  style?: object;
}

const Template: Story<Props> = (args) => (
  <MultipleSelectWithBadges
    {...args}
    renderInput={(params: AutocompleteRenderInputParams) => (
      <TextField {...params} />
    )}
  />
);

export const Default = Template.bind({});

const names = [
  'RomanGin20@incorainc.com',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

Default.args = {
  options: names,
  setSelectedOptions: (e) => console.log(e),
  style: { width: '400px' },
};
