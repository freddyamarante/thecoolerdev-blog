import type { Meta, StoryObj } from '@storybook/react'

import Status from './Status'

const meta: Meta<typeof Status> = {
  title: 'Components/Status',
  component: Status,
  decorators: [
    (Story) => (
      <div className="bg-night py-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Status>

export const Default: Story = {
  args: {
    name: 'Freddy Amarante',
    active: true,
    image: '',
  },
}
