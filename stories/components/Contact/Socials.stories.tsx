import type { Meta, StoryObj } from '@storybook/react'

import Socials from './Socials'

type Story = StoryObj<typeof Socials>

const meta: Meta<typeof Socials> = {
  title: 'Contact/Socials',
  component: Socials,
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
