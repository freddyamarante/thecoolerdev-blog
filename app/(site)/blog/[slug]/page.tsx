import { getPost } from '@/sanity/sanity-utils'
import GoBack from '@/stories/components/Blog/GoBack'

import GrainOverlay from '@/stories/components/resources/GrainOverlay'

import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  return (
    <div className="overflow-hidden">
      <GrainOverlay zIndex="z-10" />

      <main className="relative flex flex-col mx-2 sm:mx-6 lg:mx-10">
        <div className="items-center">
          <Link href="/blog">
            <GoBack label="All articles" />
          </Link>
          <Image
            src={post.mainImage}
            alt={params.slug}
            width={500}
            height={600}
          />
          <div className="relative prose lg:prose-xl prose- prose-neutral z-10">
            <PortableText value={post.body} />G II
          </div>
        </div>
      </main>
    </div>
  )
}
