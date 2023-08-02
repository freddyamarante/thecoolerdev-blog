import type { Meta, StoryObj } from '@storybook/react'

import Post from './Post'

const meta: Meta<typeof Post> = {
  title: 'Blog/Post',
  component: Post,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="grid grid-cols-3 gap-10 h-96 bg-cloud justify-center my-12 mx-10">
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Post>

export const Primary: Story = {
  args: {
    title: 'How React changed my way of thinking',
    publishedAt: '2017-02-12T09:15:00Z',
    date: 'Feb 12, 2017',
    tags: ['React'],
    summary:
      "In this article, I share how React transformed my perspective on web development. Initially skeptical, I embraced React's component-based approach and one-way data flow, leading to more efficient and organized UIs. The experience changed the way I code and think about problem-solving.",
  },
}
