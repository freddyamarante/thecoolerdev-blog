import type { Meta, StoryObj } from '@storybook/react'

import Service from './Service'

const meta: Meta<typeof Service> = {
  title: 'AboutMe/Service',
  component: Service,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Service>

export const Default: Story = {}
