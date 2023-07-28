import Image from 'next/image'

interface PostProps {
  title: string
  mainImage: string
  publishedAt: Date
  tags?: string[]
  summary: string
}

const defaultImage =
  'https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

const Post = ({ title, mainImage, publishedAt, tags, summary }: PostProps) => {
  return (
    <div className="flex bg-taxi w-full rounded-2xl">
      <div className="flex-none w-96 relative ">
        <Image
          src={mainImage ? mainImage : defaultImage}
          alt={title}
          width={600}
          height={700}
          className="absolute inset-0 w-full h-full object-cover rounded-tl-2xl rounded-bl-2xl"
        />
      </div>
    </div>
  )
}

export default Post
