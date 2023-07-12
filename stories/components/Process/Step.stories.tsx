import type { Meta, StoryObj } from '@storybook/react'

import Step from './Step'

const meta: Meta<typeof Step> = {
  title: 'Process/Step',
  component: Step,
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
type Story = StoryObj<typeof Step>

export const Default: Story = {
  args: {
    title: 'Initial consultations',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
}
