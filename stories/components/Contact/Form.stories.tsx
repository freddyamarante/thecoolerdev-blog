import type { Meta, StoryObj } from '@storybook/react'

import Form from './Form'

type Story = StoryObj<typeof Form>

const meta: Meta<typeof Form> = {
  title: 'Contact/Form',
  component: Form,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="px-16 py-12 bg-night rounded-[45px]">
        <Story />
      </div>
    ),
  ],
}
export default meta

export const Default: Story = {
  args: {},
}
