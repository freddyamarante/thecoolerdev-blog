import { PortableTextBlock } from 'sanity'

export type Post = {
  _id: string
  title: string
  summary: string
  slug: string
  mainImage: string
  publishedAt: string
  date: string
  tag: {
    title: string
  }
  body: PortableTextBlock
}
