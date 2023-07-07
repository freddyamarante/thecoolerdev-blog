import { createClient } from '@sanity/client'
import groq from 'groq'

import { Post } from '@/types/Post'
import { LandingPage } from '@/types/LandingPage'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export async function getPosts(): Promise<Post[]> {
  const data = await client.fetch(
    groq`
    *[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt,
      tags[]->,
      body
    }`
  )

  return data
}

export async function getLandingPage(): Promise<LandingPage> {
  const data = await client.fetch(
    groq`
      *[_type == "landingPage"][0]{
        _id,
        status,
        hero,
        aboutMe,
        toolkit,
        process,
        pricing,
        projects,
        blog,
        contact
      }
    `
  )

  return data
}
