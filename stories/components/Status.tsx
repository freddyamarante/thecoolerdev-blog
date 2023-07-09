import Image from 'next/image'

interface StatusProps {
  name: string
  active: boolean
  image: string
}

const defaultImage =
  'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'

const Status = ({ name, active, image }: StatusProps) => {
  const message = active ? 'currently available!' : 'not available right now'
  return (
    <div className="flex flex-row justify-center items-center gap-4 text-white">
      <div className="w-12 h-12">
        <Image
          src={image ? image : defaultImage} // Replace with your desired Unsplash image URL
          alt={name}
          className="w-full h-full object-center object-cover rounded-xl"
          width={600} // Set the desired width of the image
          height={600}
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xl font-bold leading-none">{name}</div>
        <div className="flex gap-2 items-center">
          <div
            className={`w-2 h-2 ${active ? 'bg-taxi' : 'bg-cloud-dark'}`}
          ></div>
          <div className="text-sm leading-none">{message}</div>
        </div>
      </div>
    </div>
  )
}

export default Status
