import type { Meta, StoryObj } from '@storybook/react'

import Social from './Social'

type Story = StoryObj<typeof Social>

const meta: Meta<typeof Social> = {
  title: 'Contact/Social',
  component: Social,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="px-16 py-12 bg-cloud-dark">
        <Story />
      </div>
    ),
  ],
}
export default meta

export const Default: Story = {
  args: {},
}
