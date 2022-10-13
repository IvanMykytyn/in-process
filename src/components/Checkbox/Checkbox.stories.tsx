import { Checkbox } from './Checkbox'

import { Story } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    circled: { active: { control: 'boolean' } },
    checked: { active: { control: 'boolean' } },
    disabled: { active: { control: 'boolean' } },
    children: {
      table: { disable: true },
    },
    action: {
      table: { disable: true },
    },
    centerRipple: {
      table: { disable: true },
    },
    disableTouchRipple: {
      table: { disable: true },
    },
    focusRipple: {
      table: { disable: true },
    },
    focusVisibleClassName: {
      table: { disable: true },
    },
    LinkComponent: {
      table: { disable: true },
    },
    TouchRippleProps: {
      table: { disable: true },
    },
    touchRippleRef: {
      table: { disable: true },
    },
    sx: {
      table: { disable: true },
    },
    color: {
      table: { disable: true },
    },
    onFocusVisible: {
      table: { disable: true },
    },
  },
}

interface Props {
  circled?: boolean
  disabled?: boolean
  checked?: boolean
  onFocusVisible: () => void
}

const Template: Story<Props> = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
export const Checked = Template.bind({})
export const Circled = Template.bind({})
export const Disabled = Template.bind({})

Default.args = {
  circled: false,
  disabled: false,
  checked: false,
  onFocusVisible: undefined,
}

Checked.args = {
  circled: false,
  disabled: false,
  checked: true,
  onFocusVisible: undefined,
}

Circled.args = {
  disabled: false,
  circled: true,
  checked: true,
  onFocusVisible: undefined,
}

Disabled.args = {
  circled: true,
  disabled: true,
  checked: true,
  onFocusVisible: undefined,
}
