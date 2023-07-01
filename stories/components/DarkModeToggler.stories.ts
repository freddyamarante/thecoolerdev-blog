import type { Meta, StoryObj } from '@storybook/react'

import DarkModeToggler from './DarkModeToggler'

const meta: Meta<typeof DarkModeToggler> = {
  title: 'Components/DarkModeToggler',
  component: DarkModeToggler,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DarkModeToggler>

export const Default: Story = {}