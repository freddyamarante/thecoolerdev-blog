import type { Meta, StoryObj } from '@storybook/react'

import Toolkit from './Toolkit'

const meta: Meta<typeof Toolkit> = {
  title: 'Toolkit/Toolkit',
  component: Toolkit,
  decorators: [
    (Story) => (
      <div className="flex justify-center bg-taxi p-16 overflow-x-hidden">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Toolkit>

export const Default: Story = {
  args: {
    subtitle: 'My toolkit',
    subBody:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    button: 'Learn more',
    tools: [
      {
        title: 'JavaScript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: null,
      },
      {
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: null,
      },
      {
        title: 'Tailwind',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: null,
      },
      {
        title: 'TypeScript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: null,
      },
    ],
  },
}
