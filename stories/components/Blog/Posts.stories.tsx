import type { Meta, StoryObj } from '@storybook/react'

import Posts from './Posts'

const meta: Meta<typeof Posts> = {
  title: 'Blog/Posts',
  component: Posts,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="h-fit my-10">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Posts>

export const Default: Story = {
  args: {
    title: 'Read some cool stuff',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    button: 'All articles',
    posts: [
      {
        title: 'How React changed my way of thinking',
        slug: 'how-react-changed-my-way-of-thinking',

        publishedAt: '2017-02-12T09:15:00Z',
        date: 'Feb 12, 2017',
        tag: { title: 'React' },
        summary:
          "In this article, I share how React transformed my perspective on web development. I embraced React's component-based approach and the experience changed the way I code and think about problem-solving.",
      },
      {
        title: 'How React changed my way of thinking',
        slug: 'how-react-changed-my-way-of-thinking',

        publishedAt: '2017-02-12T09:15:00Z',
        date: 'Feb 12, 2017',
        tag: { title: 'React' },
        summary:
          "In this article, I share how React transformed my perspective on web development. I embraced React's component-based approach and the experience changed the way I code and think about problem-solving.",
      },
      {
        title: 'How React changed my way of thinking',
        slug: 'how-react-changed-my-way-of-thinking',

        publishedAt: '2017-02-12T09:15:00Z',
        date: 'Feb 12, 2017',
        tag: { title: 'React' },
        summary:
          "In this article, I share how React transformed my perspective on web development. I embraced React's component-based approach and the experience changed the way I code and think about problem-solving.",
      },
      {
        title: 'How React changed my way of thinking',
        slug: 'how-react-changed-my-way-of-thinking',

        publishedAt: '2017-02-12T09:15:00Z',
        date: 'Feb 12, 2017',
        tag: { title: 'React' },
        summary:
          "In this article, I share how React transformed my perspective on web development. I embraced React's component-based approach and the experience changed the way I code and think about problem-solving.",
      },
      {
        title: 'How React changed my way of thinking',
        slug: 'how-react-changed-my-way-of-thinking',

        publishedAt: '2017-02-12T09:15:00Z',
        date: 'Feb 12, 2017',
        tag: { title: 'React' },
        summary:
          "In this article, I share how React transformed my perspective on web development. I embraced React's component-based approach and the experience changed the way I code and think about problem-solving.",
      },
    ],
  },
}
