import { getPosts } from '@/sanity/sanity-utils'
import GoBack from '@/stories/components/Blog/GoBack'
import Posts from '@/stories/components/Blog/Posts'

import Link from 'next/link'

const Blog = async () => {
  const posts = await getPosts()

  return (
    <div className="overflow-hidden bg-cloud">
      <main className="px-2 sm:px-6 lg:px-10 py-8">
        <div className="flex justify-between items-center w-full mb-8">
          <Link href="/">
            <GoBack />
          </Link>
        </div>
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-8">
          Read my blog
        </h1>
        <Posts posts={posts} evenOddLayout />
      </main>
    </div>
  )
}

Blog.theme = 'light'

export default Blog
