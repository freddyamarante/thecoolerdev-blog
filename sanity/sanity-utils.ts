import { createClient } from '@sanity/client'
import groq from 'groq'

import config from './config/config'
import { Post } from '@/types/Post'
import { LandingPage } from '@/types/LandingPage'

const projectId = config.projectId
const dataset = config.dataset
const apiVersion = config.apiVersion

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
