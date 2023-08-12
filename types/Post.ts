import { PortableTextBlock } from 'sanity'

export type Post = {
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
  timeToRead: number
}
