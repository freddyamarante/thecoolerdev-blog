interface ServiceProps {
  title: string
  description: string
  body: string
}

const Service = ({ title, description, body }: ServiceProps) => {
  return (
    <div className="flex flex-col max-w-md gap-4">
      <div className="text-white bg-night text-xl px-4 py-1 rounded-3xl leading-0 w-fit">
        {title}
      </div>
      <div className="text-3xl font-bold leading-none">{description}</div>
      <div className="text-xl leading-tight">{body}</div>
    </div>
  )
}

export default Service
