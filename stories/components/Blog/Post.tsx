import Image from 'next/image'

interface PostProps {
  title: string
  mainImage: string
  publishedAt: string
  date: string
  tags?: string[]
  summary: string
}

const defaultImage =
  'https://images.unsplash.com/photo-1621252179027-94459d278660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'

const Post = ({
  title,
  mainImage,
  publishedAt,
  date,
  tags,
  summary,
}: PostProps) => {
  return (
    <article className="relative isolate col-span-1 flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 h-96 px-4 pb-8">
      <Image
        src={mainImage ? mainImage : defaultImage}
        alt={title}
        width={600}
        height={700}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night-dark via-night/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-night/10" />

      <div className="flex items-center gap-y-1 gap-x-4 overflow-hidden text-md text-white">
        <time dateTime={publishedAt}>{date}</time>
        <div>/</div>
        {tags?.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-cloud px-2 py-1 text-xs font-medium text-black"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="mt-3 text-xl font-semibold leading-6 text-white inset-0">
        {title}
      </h3>
    </article>
  )
}

export default Post
