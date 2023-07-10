import type { Meta, StoryObj } from '@storybook/react'

import GradientBackground from './GradientBackground'

type Story = StoryObj<typeof GradientBackground>

const meta: Meta<typeof GradientBackground> = {
  title: 'Components/GradientBackground',
  component: GradientBackground,
  tags: ['autodocs'],
}
export default meta

export const Extralarge: Story = {
  args: {
    className: 'w-96 h-96',
    size: 'extralarge',
  },
}

export const Large: Story = {
  args: {
    className: 'w-96 h-96',
    size: 'large',
  },
}

export const Small: Story = {
  args: {
    className: 'w-96 h-96',
    size: 'small',
  },
}
