import type { Meta, StoryObj } from '@storybook/react'

import PricingCard from './PricingCard'

const meta: Meta<typeof PricingCard> = {
  title: 'Pricing/PricingCard',
  component: PricingCard,
  decorators: [
    (Story) => (
      <div className="flex justify-center bg-cloud p-8">
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PricingCard>

export const Normal: Story = {
  args: {
    title: 'Bigger Projects',
    description: 'A simple website to promote your business',
    price: 299,
    button: 'Book a call',
    included: [
      'Fully customizable storefront for Shopify',
      'Web applications for your business',
      '24 hours availability',
      'SEO optimizations',
      'Analytics integration',
      'Ongoing support',
    ],
    highlight: false,
  },
}

export const Highlight: Story = {
  args: {
    title: 'Landing Page',
    description: 'A simple website to promote your business',
    price: 299,
    button: 'Book a call',
    included: [
      'Fully customizable storefront for Shopify',
      'Web applications for your business',
      '24 hours availability',
      'SEO optimizations',
      'Analytics integration',
      'Ongoing support',
    ],
    highlight: true,
  },
}
