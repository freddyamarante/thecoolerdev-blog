import type { Meta, StoryObj } from '@storybook/react'

import Post from './Post'

const meta: Meta<typeof Post> = {
  title: 'Blog/Post',
  component: Post,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="flex h-96 bg-cloud justify-center my-12 mx-96">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Post>

export const Primary: Story = {
  args: {},
}
