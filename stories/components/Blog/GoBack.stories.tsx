import type { Meta, StoryObj } from '@storybook/react'

import GoBack from './GoBack'

type Story = StoryObj<typeof GoBack>

const meta: Meta<typeof GoBack> = {
  title: 'Blog/GoBack',
  component: GoBack,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="px-16 py-12 bg-cloud-dark rounded-[45px]">
        <Story />
      </div>
    ),
  ],
}
export default meta

export const Default: Story = {
  args: {},
}
