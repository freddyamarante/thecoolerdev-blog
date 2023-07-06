import { PortableTextBlock } from 'sanity'

export type Post = {
  _id: string
  title: string
  slug: string
  mainImage: string
  publishedAt: Date
  tags: string[]
  body: PortableTextBlock
}
