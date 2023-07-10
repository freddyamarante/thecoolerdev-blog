import type { Meta, StoryObj } from '@storybook/react'

import Status from './Status'

const meta: Meta<typeof Status> = {
  title: 'Navbar/Status',
  component: Status,
  decorators: [
    (Story) => (
      <div className="flex justify-center bg-night py-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Status>

export const Active: Story = {
  args: {
    name: 'Freddy Amarante',
    active: true,
  },
}

export const Inactive: Story = {
  args: {
    name: 'Freddy Amarante',
    active: false,
  },
}
