import { Badge } from './Badge'

import { Story } from '@storybook/react'

import { Person } from '@mui/icons-material'

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {
    children: {
      table: { disable: true },
    },
    sx: {
      table: { disable: true },
    },
    color: {
      table: { disable: true },
    },
    avatar: {
      table: { disable: true },
    },
  },
}

interface Props {
  label?: string
  children?: undefined
  variant?: 'outlined' | 'filled' | undefined
  disabled?: boolean
  onDelete?: () => void
  icon?: any
  size?: 'small' | 'medium'
}

const Template: Story<Props> = (args) => <Badge {...args} />

export const Default = Template.bind({})
export const Outlined = Template.bind({})
export const Deletable = Template.bind({})
export const Disabled = Template.bind({})
export const WithIcon = Template.bind({})
export const SmallSize = Template.bind({})
export const SmallSizeWithIconDisabled = Template.bind({})

Default.args = {
  label: 'Default',
  onDelete: undefined,
}

SmallSize.args = {
  label: 'Small Size',
  onDelete: () => {},
  size: 'small',
}

Outlined.args = {
  label: 'Outlined',
  variant: 'outlined',
  onDelete: undefined,
}

Deletable.args = {
  label: 'Deletable',
  onDelete: () => {},
}

Disabled.args = {
  label: 'Disabled',
  onDelete: () => {},
  disabled: true,
}

WithIcon.args = {
  label: 'With Icon',
  icon: <Person />,
  onDelete: () => {},
}

SmallSizeWithIconDisabled.args = {
  label: 'Testing',
  icon: <Person />,
  size: 'small',
  disabled: true,
  variant: 'outlined',
  onDelete: () => {},
}
