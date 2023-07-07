import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    mode: 'primary',
    label: 'Button',
  },
}

export const Contrast: Story = {
  args: {
    mode: 'contrast',
    label: 'Button',
  },
}

export const Simple: Story = {
  args: {
    mode: 'simple',
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
}

export const Extralarge: Story = {
  args: {
    size: 'extralarge',
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
}
