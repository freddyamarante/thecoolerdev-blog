import type { Meta, StoryObj } from '@storybook/react'

import Tool from './Tool'

const meta: Meta<typeof Tool> = {
  title: 'Toolkit/Tool',
  component: Tool,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Tool>

export const Default: Story = {
  args: {
    title: 'JavaScript',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
}
