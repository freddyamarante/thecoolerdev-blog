import { Image, PortableTextBlock } from 'sanity'

export type Post = {
  _id: string
  title: string
  slug: string
  mainImage: Image
  publishedAt: Date
  tags: string[]
  body: PortableTextBlock
}
