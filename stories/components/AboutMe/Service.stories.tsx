import type { Meta, StoryObj } from '@storybook/react'

import Service from './Service'

const meta: Meta<typeof Service> = {
  title: 'AboutMe/Service',
  component: Service,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Service>

export const Default: Story = {
  args: {
    title: 'Service #1',
    description: 'Description of service one',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
}
