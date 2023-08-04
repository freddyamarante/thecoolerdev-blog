'use client'

import GradientBackground from '../GradientBackground'
import Post from './Post'

import Button from '../Button'

interface PostsProps {
  title: string
  description: string
  button: string
  posts?: {
    _id: number
    index?: number
    title: string
    mainImage?: string
    publishedAt: string
    date: string
    tag: {
      title: string
    }
    summary: string
  }[]
}

const Posts = ({ title, description, button, posts }: PostsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
      <GradientBackground
        backgroundColor="#CFDBD5"
        gradientColor="#A5A5B6"
        radius={50}
        className="flex flex-col justify-center col-span-1 md:col-span-2 px-8 lg:px-12 py-10 lg:py-12 xl:py-0 rounded-2xl basis-1/3 h-96"
      >
        <div className="relative flex flex-col gap-4 z-10">
          <h2 className="font-bold text-4xl lg:text-3xl xl:text-4xl">
            {title}
          </h2>
          <p className="text-2xl lg:text-xl xl:text-2xl">{description}</p>
          <Button mode="simple" label={button} />
        </div>
      </GradientBackground>
      {posts &&
        posts.map((post, index) => (
          <Post
            index={index}
            key={post._id}
            title={post.title}
            summary={post.summary}
            tag={post.tag}
            mainImage={post.mainImage}
            publishedAt={post.publishedAt}
            date={post.date}
          />
        ))}
    </div>
  )
}

export default Posts