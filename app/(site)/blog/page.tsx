import GoBack from '@/stories/components/Blog/GoBack'

import Link from 'next/link'

const Blog = () => {
  return (
    <div className="overflow-hidden bg-cloud">
      <main className="px-2 sm:px-6 lg:px-10 py-8">
        <div className="flex justify-between items-center w-full mb-8">
          <Link href="/">
            <GoBack />
          </Link>
        </div>
      </main>
    </div>
  )
}

Blog.theme = 'light'

export default Blog
