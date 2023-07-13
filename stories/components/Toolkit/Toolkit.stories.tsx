import type { Meta, StoryObj } from '@storybook/react'

import Toolkit from './Toolkit'

const meta: Meta<typeof Toolkit> = {
  title: 'Toolkit/Toolkit',
  component: Toolkit,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toolkit>

export const Default: Story = {}
