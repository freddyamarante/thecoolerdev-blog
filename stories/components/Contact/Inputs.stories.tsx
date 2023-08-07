import type { Meta, StoryObj } from '@storybook/react'

import Inputs from './Inputs'

type Story = StoryObj<typeof Inputs>

const meta: Meta<typeof Inputs> = {
  title: 'Contact/Inputs',
  component: Inputs,
  tags: ['autodocs'],
}
export default meta

export const Input: Story = {
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
