import type { Meta, StoryObj } from '@storybook/react'

import Input from './Input'

type Story = StoryObj<typeof Input>

const meta: Meta<typeof Input> = {
  title: 'Contact/Input',
  component: Input,
  tags: ['autodocs'],
}
export default meta

export const Default: Story = {
  args: {
    label: 'Test',
    name: 'test',
    id: 'test',
    textarea: false,
  },
}

export const Textarea: Story = {
  args: {
    label: 'Test',
    name: 'test',
    id: 'test',
    textarea: true,
  },
}
