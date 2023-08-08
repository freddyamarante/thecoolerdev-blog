import type { Meta, StoryObj } from '@storybook/react'

import Form from './Form'

type Story = StoryObj<typeof Form>

const meta: Meta<typeof Form> = {
  title: 'Contact/Form',
  component: Form,
  tags: ['autodocs'],
}
export default meta

export const Default: Story = {
  args: {},
}
