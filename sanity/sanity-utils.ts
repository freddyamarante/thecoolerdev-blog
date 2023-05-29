import { createClient, groq } from 'next-sanity'
import { Post } from '@/types/Post'
import config from './config/config'

export async function getPosts(): Promise<Post[]> {
  return createClient(config).fetch(
    groq`*[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      author->,
      "mainImage": mainImage.asset->url,
      publishedAt,
      categories[]->,
      body
    }`
  )
}