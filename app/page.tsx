import { getPosts } from '@/sanity/sanity-utils'
import DarkModeToggler from '@/stories/components/DarkModeToggler'
import { PortableText } from '@portabletext/react'

export default async function Home() {
  const posts = await getPosts()
  return (
    <div className="flex justify-center flex-col">
      <main className="text-8xl font-extrabold">
        <h1 className="text-night dark:text-cloud">Moises Ortega</h1>
      </main>
      <DarkModeToggler />
      <div className="mt-5 grid grid-cols-3 gap-8">
        {posts.map((post) => (
          <>
            <div>{post.title}</div>
            <PortableText value={post.body} />
          </>
        ))}
      </div>
    </div>
  )
}
