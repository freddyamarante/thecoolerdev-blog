import Image from 'next/image'

type StatusProps = {
  name: string
  active: boolean
  image?: string
}

const defaultImage = '/defaultImage.avif'

const Status = ({ name, active = true, image }: StatusProps) => {
  const message = active ? 'currently available!' : 'not available right now'
  return (
    <div className="flex flex-row items-center gap-4 text-white">
      <div className="w-12 h-12">
        <Image
          src={image ? image : defaultImage}
          alt={name}
          className="w-full h-full object-center object-cover rounded-2xl"
          width={600}
          height={600}
        />
      </div>
      <div className="flex flex-col gap-1 sm:gap-0">
        <div className="text-lg sm:text-xl font-bold leading-none">{name}</div>
        <div className="flex gap-2 items-center">
          <div
            className={`w-2 h-2 ${active ? 'bg-taxi' : 'bg-cloud-dark'}`}
          ></div>
          <div className="text-xs sm:text-sm leading-none">{message}</div>
        </div>
      </div>
    </div>
  )
}

export default Status
