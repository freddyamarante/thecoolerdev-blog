import type { Meta, StoryObj } from '@storybook/react'

import NavElement from './NavElement'

const meta: Meta<typeof NavElement> = {
  title: 'Navbar/NavElement',
  component: NavElement,
  decorators: [
    (Story) => (
      <div className="flex justify-center bg-night py-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof NavElement>

export const Active: Story = {
  args: {
    label: 'Element',
    active: true,
  },
}

export const Inactive: Story = {
  args: {
    label: 'Element',
    active: false,
  },
}
