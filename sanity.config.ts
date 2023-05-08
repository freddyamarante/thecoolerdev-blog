import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const config = defineConfig({
  title: 'thecoolerdev-blog-studio',

  projectId: '7eiqcloi',
  dataset: 'production',

  basePath: '/admin',
  plugins: [deskTool(), visionTool()],

  apiVersion: '2023-05-06',
  schema: {
    types: schemaTypes,
  },
})

export default config
