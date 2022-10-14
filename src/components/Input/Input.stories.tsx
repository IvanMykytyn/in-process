import { Input } from './Input'

import { Story } from '@storybook/react'

import { Mail } from '@mui/icons-material'

export default {
  title: 'Input',
  component: Input,
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
}

interface Props {
  type: 'text' | 'password' | 'email' | 'number'
  label: string
  helperText: string
  icon: any
  error: boolean
  disabled: boolean
  fullWidth: boolean
  value: string
  onChange: () => void
}

const Template: Story<Props> = (args) => <Input {...args} />

export const Default = Template.bind({})
export const Password = Template.bind({})
export const Icon = Template.bind({})
export const Error = Template.bind({})
export const Disabled = Template.bind({})
export const HelperText = Template.bind({})
export const FullWidth = Template.bind({})
export const Total = Template.bind({})

Default.args = {
  type: 'text',
  label: 'First Name',
}

Password.args = {
  type: 'password',
  label: 'Password',
}

Icon.args = {
  type: 'email',
  label: 'email',
  icon: Mail,
}

Disabled.args = {
  type: 'email',
  label: 'email',
  disabled: true,
  icon: Mail,
}

HelperText.args = {
  type: 'text',
  label: 'Label labeL',
  helperText: 'Important Information',
}

Error.args = {
  type: 'text',
  label: 'Some Value',
  error: true,
  helperText: 'Invalid Value',
}

FullWidth.args = {
  type: 'text',
  label: 'Full Width',
  fullWidth: true,
}

Total.args = {
  type: 'email',
  label: 'Email',
  icon: Mail,
  error: true,
  fullWidth: true,
  disabled: false,
  helperText: 'At least 8 symbols',
  value: 'Example@gmail.com',
  onChange: () => {},
}
