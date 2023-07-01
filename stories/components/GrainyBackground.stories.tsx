import type { Meta, StoryObj } from '@storybook/react'

import { GrainyBackground } from './GrainyBackground'

type Story = StoryObj<typeof GrainyBackground>

const meta: Meta<typeof GrainyBackground> = {
  title: 'Components/GrainyBackground',
  component: GrainyBackground,
  tags: ['autodocs'],
}
export default meta


export const Extralarge: Story = {
  args: {
    className: "w-96 h-96",
    size: 'extralarge',
  },
};

export const Large: Story = {
  args: {
    className: "w-96 h-96",
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    className: "w-96 h-96",
    size: 'small',
  },
};