import React from 'react'

import type { Preview } from '@storybook/react'
import '../styles/globals.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    darkMode: {
      defaultValue: false,
    },
  },
  decorators: [
    (Story) => (
      <div className="dark:bg-night bg-cloud">
        <div className="absolute grain-background top-0 left-0 h-full w-full pointer-events-none opacity-50"></div>
        <Story />
      </div>
    ),
  ],
}

export default preview
