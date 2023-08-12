import { createClient } from '@sanity/client'
import groq from 'groq'

import { Post } from '@/types/Post'
import { LandingPage } from '@/types/LandingPage'
import { Status } from '@/types/Status'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

export async function getPost(slug: string): Promise<Post> {
  const revalidate = 60
  const query = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    summary,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,
    date,
    tag->,
    body,
    timeToRead,
  }
  `

  const data = await client.fetch(query, { slug, next: { revalidate } })

  return data
}

export async function getPosts(): Promise<Post[]> {
  const revalidate = 60
  const query = groq`
  *[_type == "post"]{
    _id,
    title,
    summary,
    "slug": slug.current,
    "mainImage": mainImage.asset->url,
    publishedAt,
    date,
    tag->,
  }`

  const data = await client.fetch(query, { next: revalidate })

  return data
}

export async function getStatus(): Promise<Status> {
  const revalidate = 60
  const query = groq`
  *[_type == "status"][0]{
    _id,
    name,
    active,
    "image": image.asset->url,
  }
`

  const data = await client.fetch(query, { next: { revalidate } })

  return data
}

export async function getLandingPage(): Promise<LandingPage> {
  const revalidate = 60
  const query = groq`
  *[_type == "landingPage"][0]{
    _id,
    hero,
    aboutMe {
      title,
      body,
      "image": image.asset->url,
      services[] {
        title,
        description,
        body,
      },
      skills,
      calibration,
    },
    toolkit {
      title,
      body,
      subtitle,
      subBody,
      button,
      tools[] {
        title,
        description,
        "image": image.asset->url,
      },
    },
    process {
      title,
      body,
      button,
      steps[] {
        title,
        description,
      },
    },
    pricing {
      title,
      prices[] {
        title,
        description,
        price,
        button,
        included[],
        highlight,
      },
      disclaimer,
    },
    projects {
      title,
      description,
      project[] {
        title,
        "image": image.asset->url,
        description,
        url,
        github,
      },
    },
    blog {
      title,
      description,
      button,
    },
    contact {
      formTitle,
      contactTitle
    },
  }
`

  const data = await client.fetch(query, { next: { revalidate } })

  return data
}
