import Image from 'next/image'

interface ToolProps {
  title: string
  description?: string
  image?: string
}

const defaultImage =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'

const Tool = ({ title = 'Framework', description, image }: ToolProps) => {
  return (
    <div className="flex flex-row w-[440px] h-[275px] px-8 justify-center items-center rounded-2xl bg-cloud-dark">
      <div className="flex flex-col gap-2 grow-0">
        <span className="text-3xl font-bold">{title}</span>
        <span className="text-xl">{description}</span>
      </div>
      <div className="w-32 h-32 ml-8 flex-shrink-0">
        <Image
          src={image ? image : defaultImage}
          alt={title}
          className="w-full h-full object-center object-cover"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}

export default Tool
