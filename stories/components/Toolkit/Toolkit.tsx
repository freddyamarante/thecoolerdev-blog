import Button from '../Button'
import Tool from './Tool'

interface ToolkitProps {
  subtitle?: string
  subBody?: string
  button?: string
  tools?: {
    title: string
    description: string
    image: string | null
  }[]
}

const Toolkit = ({
  subtitle,
  subBody,
  button = 'Learn more',
  tools = [],
}: ToolkitProps) => {
  return (
    <div className="w-full px-12 py-16 rounded-xl bg-night text-white">
      <div className="flex items-center">
        <div className="flex flex-col gap-8 pr-4 flex-shrink-0 basis-2/5">
          <div className="text-4xl font-bold leading-normal">{subtitle}</div>
          <div className="text-2xl">{subBody}</div>
          <div className="flex justify-start">
            <Button mode="primary" label={button} />
          </div>
        </div>
        <div className="flex justify-start items-center gap-8 ml-20 text-night">
          {tools.map((tool, index) => (
            <Tool
              title={tool.title}
              description={tool.description}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Toolkit
