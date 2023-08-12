import type { Meta, StoryObj } from '@storybook/react'

import Navbar from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Navbar/Navbar',
  component: Navbar,
  decorators: [
    (Story) => (
      <div className="flex justify-center bg-cloud py-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  args: {
    name: 'Freddy Amarante',
    active: true,
    elements: [
      {
        title: 'Who am I',
        id: 'aboutMe',
      },

      {
        title: 'Process',
        id: 'process',
      },

      {
        title: 'Blog',
        id: 'blog',
      },
      {
        title: 'Contact',
        id: 'contact',
      },
    ],
  },
}
