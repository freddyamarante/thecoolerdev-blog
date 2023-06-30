import type { Meta, StoryObj } from '@storybook/react'

import { GrainyBackground } from './GrainyBackground'

const meta: Meta<typeof GrainyBackground> = {
  title: 'Components/GrainyBackground',
  component: GrainyBackground,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GrainyBackground>

export const Default: Story = {}