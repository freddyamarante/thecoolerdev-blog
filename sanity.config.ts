import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './sanity/schemas'
import { visionTool } from '@sanity/vision'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

const config = defineConfig({
  title: 'thecoolerdev-blog-studio',

  projectId: '7eiqcloi',
  dataset: 'production',
  useCdn: true,

  basePath: '/admin',
  plugins: [deskTool(), visionTool(), vercelDeployTool()],

  apiVersion: '2023-05-06',
  schema: {
    types: schemaTypes,
  },
})

export default config
