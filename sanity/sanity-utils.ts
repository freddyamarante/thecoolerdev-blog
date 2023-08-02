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

export async function getPosts(): Promise<Post[]> {
  const data = await client.fetch(
    groq`
    *[_type == "post"]{
      _id,
      title,
      "slug": slug.current,
      "mainImage": mainImage.asset->url,
      publishedAt,
      date,
      tagsArray[]->,
      body
    }`
  )

  return data
}

export async function getStatus(): Promise<Status> {
  const data = await client.fetch(
    groq`
      *[_type == "status"][0]{
        _id,
        name,
        active,
        "image": image.asset->url,
      }
    `
  )

  return data
}

export async function getLandingPage(): Promise<LandingPage> {
  const data = await client.fetch(
    groq`
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
        blog,
        contact
      }
    `
  )

  return data
}
