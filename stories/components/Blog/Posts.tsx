'use client'

import { useState } from 'react'

import GradientBackground from '../GradientBackground'
import Post from './Post'

import Button from '../Button'

interface PostsProps {
  title: string
  description: string
  button: string
  posts?:
    | {
        title: string
        mainImage?: string
        publishedAt: string
        date: string
        tag: {
          title: string
        }
        summary: string
      }[]
    | undefined
}

const Posts = ({ title, description, button, posts = [] }: PostsProps) => {
  const [showAllPosts, setShowAllPosts] = useState<boolean>(false)
  const initialPostsCount: number = 5
  const visiblePosts = showAllPosts ? posts : posts?.slice(0, initialPostsCount)

  const handleViewMoreClick = () => {
    setShowAllPosts(!showAllPosts)
  }

  const isEven: boolean = visiblePosts.length % 2 === 0

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 auto-cols-fr">
        <GradientBackground
          backgroundColor="#CFDBD5"
          gradientColor="#A5A5B6"
          radius={50}
          className="flex flex-col justify-center col-span-1 md:col-span-2 px-8 lg:px-12 py-10 lg:py-12 xl:py-0 rounded-2xl h-auto md:h-96"
        >
          <div className="relative flex flex-col gap-4 z-10">
            <h2 className="font-bold text-4xl lg:text-3xl xl:text-4xl">
              {title}
            </h2>
            <p className="text-2xl lg:text-xl xl:text-2xl">{description}</p>
            <Button mode="simple" label={button} />
          </div>
        </GradientBackground>

        {visiblePosts &&
          visiblePosts.map((post, index) => (
            <Post
              index={index}
              key={index}
              title={post.title}
              summary={post.summary}
              tag={post.tag}
              mainImage={post.mainImage}
              publishedAt={post.publishedAt}
              date={post.date}
            />
          ))}

        {!isEven && (
          <GradientBackground className="hidden md:flex xl:hidden bg-taxi justify-center items-center rounded-2xl">
            <h3 className="text-5xl font-black leading-0 z-10">Cooler.</h3>
          </GradientBackground>
        )}
      </div>

      {posts?.length > initialPostsCount && (
        <div className="flex justify-center mx-auto mt-10">
          <Button
            label={!showAllPosts ? 'Show all' : 'Show less'}
            mode="simple"
            onClick={handleViewMoreClick}
          />
        </div>
      )}
    </>
  )
}

export default Posts
