import type { Meta, StoryObj } from '@storybook/react'

import Skills from './Skills'

const meta: Meta<typeof Skills> = {
  title: 'AboutMe/Skills',
  component: Skills,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Skills>

export const Default: Story = {
  args: {
    skills: [
      'Skill 1',
      'Skill 2',
      'Skill 3',
      'Skill 4',
      'Skill 5',
      'Skill 6',
      'Skill 7',
      'Skill 8',
      'Skill 9',
      'Skill 10',
      'Skill 11',
      'Skill 12',
    ],
  },
}
