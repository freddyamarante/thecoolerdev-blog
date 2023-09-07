import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

const config = defineConfig({
  title: 'thecoolerdev-blog-studio',

  projectId: '7eiqcloi',
  dataset: 'production',
  useCdn: false,

  basePath: '/admin',
  plugins: [deskTool(), visionTool(), vercelDeployTool(), codeInput()],

  apiVersion: '2023-05-06',
  schema: {
    types: schemaTypes,
  },
})

export default config
