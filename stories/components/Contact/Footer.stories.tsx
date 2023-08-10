import type { Meta, StoryObj } from '@storybook/react'

import Footer from './Footer'

type Story = StoryObj<typeof Footer>

const meta: Meta<typeof Footer> = {
  title: 'Contact/Footer',
  component: Footer,
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
