import type { Meta, StoryObj } from '@storybook/react'

import ShareButtons from './ShareButtons'

type Story = StoryObj<typeof ShareButtons>

const meta: Meta<typeof ShareButtons> = {
  title: 'Blog/ShareButtons',
  component: ShareButtons,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex justify-center px-16 py-12 bg-cloud-dark rounded-[45px]">
        <Story />
      </div>
    ),
  ],
}
export default meta

export const Default: Story = {
  args: {
    articleTitle: 'Article Test Title',
    summary: '',
  },
}
