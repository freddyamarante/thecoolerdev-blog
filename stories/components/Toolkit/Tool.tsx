import Image from 'next/image'

type ToolProps = {
  title: string
  description?: string
  image?: string
}

const defaultImage = '/javascriptImage.png'

const Tool = ({ title = 'Framework', description, image }: ToolProps) => {
  return (
    <div className="relative flex flex-row w-[400px] lg:w-[440px] h-[260px] px-8 justify-center items-center rounded-2xl bg-cloud-dark z-10">
      <div className="flex flex-col gap-2 grow-0">
        <span className="text-3xl font-bold">{title}</span>
        <span className="text-xl">{description}</span>
      </div>
      <div className="flex w-32 h-32 ml-8 flex-shrink-0 items-center">
        <Image
          src={image ? image : defaultImage}
          alt={title}
          className="w-fit h-fit object-center object-cover"
          width={600}
          height={600}
        />
      </div>
    </div>
  )
}

export default Tool
