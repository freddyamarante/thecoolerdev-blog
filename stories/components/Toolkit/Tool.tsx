import Image from 'next/image'

type ToolProps = {
  title: string
  description?: string
  image?: string
}

const defaultImage = '/javascriptImage.png'

const Tool = ({ title = 'Framework', description, image }: ToolProps) => {
  return (
    <div className="relative flex flex-row w-[290px] sm:w-[380px] h-[180px] sm:h-[220px] lg:w-[440px] lg:h-[260px] px-6 lg:px-8 justify-center items-center rounded-2xl bg-cloud-dark z-10">
      <div className="flex flex-col gap-2 grow-0">
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold">
          {title}
        </span>
        <span className="text-md sm:text-lg lg:text-xl">{description}</span>
      </div>
      <div className="flex w-24 h-24 lg:w-32 lg:h-32 ml-8 flex-shrink-0 items-center">
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
