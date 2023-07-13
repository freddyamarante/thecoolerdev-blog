import type { Meta, StoryObj } from '@storybook/react'

import GradientBackground from './GradientBackground'

type Story = StoryObj<typeof GradientBackground>

const meta: Meta<typeof GradientBackground> = {
  title: 'Components/GradientBackground',
  component: GradientBackground,
  tags: ['autodocs'],
}
export default meta

export const Default: Story = {
  args: {
    className: 'w-full h-full',
  },
  decorators: [
    (Story) => (
      <div className="w-full h-48">
        <Story />
      </div>
    ),
  ],
}
