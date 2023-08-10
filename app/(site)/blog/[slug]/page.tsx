import { getPost, getStatus } from '@/sanity/sanity-utils'
import GoBack from '@/stories/components/Blog/GoBack'
import DarkModeToggler from '@/stories/components/DarkModeToggler'

import GrainOverlay from '@/stories/components/resources/GrainOverlay'

import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  const status = await getStatus()

  return (
    <div className="overflow-hidden">
      <GrainOverlay zIndex="z-10" />

      <main className="px-2 sm:px-6 lg:px-10 py-8">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <div className="flex justify-between items-center w-full mb-8">
            <Link href="/blog">
              <GoBack />
            </Link>

            <DarkModeToggler />
          </div>

          <div className="w-full">
            <Image
              src={post.mainImage}
              alt={params.slug}
              width={500}
              height={600}
              className="object-cover w-full rounded-[45px]"
            />
          </div>

          <div className="relative flex flex-col gap-4 text-night-dark dark:text-white my-8 z-10">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
              {post.title}
            </h1>
            <div className="flex flex-col gap-4 md:flex-row md:gap-0 justify-between items-center">
              <div className="flex flex-row gap-2 items-center mt-2">
                <Image
                  src={status.image}
                  alt={status.name}
                  width={300}
                  height={300}
                  className="w-10 h-10 rounded-lg"
                />
                <span className="text-md lg:text-lg xl:text-xl font-medium">
                  {status.name}
                </span>
              </div>

              <div className="flex flex-row gap-6">
                <div className="flex flex-col justify-center">
                  <h3 className="text-sm lg:text-md xl:text-lg font-medium">
                    Time to read
                  </h3>
                  <p className="text-sm">~ {post.timeToRead} minutes</p>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="text-sm lg:text-md xl:text-lg font-medium">
                    Published
                  </h3>
                  <p className="text-sm">{post.date}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative prose lg:prose-xl prose-neutral dark:prose-invert z-10">
            <PortableText value={post.body} />
          </div>
        </div>
      </main>
    </div>
  )
}
