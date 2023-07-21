import { Disclosure } from '@headlessui/react'
import { ChevronDown, ChevronUp } from '../resources/Icons'

interface StepProps {
  number?: number
  title: string
  description: string
  isOpen: boolean
  onToggle: () => void
}

const Step = ({
  number = 1,
  title,
  description,
  isOpen,
  onToggle,
}: StepProps) => {
  return (
    <Disclosure as="nav" className="bg-night w-full rounded-xl px-3">
      {({ open }) => (
        <Disclosure.Button
          className="flex flex-col justify-center w-full"
          onClick={onToggle}
        >
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row text-4xl font-medium text-white leading-none gap-x-9">
              <div>{`0${(number + 1).toString()}`}</div>
              <div>{title}</div>
            </div>
            <div className="flex rounded-2xl p-2 my-3 text-white hover:bg-night-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">More information</span>
              {isOpen ? (
                <ChevronUp aria-hidden="true" />
              ) : (
                <ChevronDown aria-hidden="true" />
              )}
            </div>
          </div>

          <Disclosure.Panel className="px-4 py-6 rounded-2xl text-white">
            {description}
          </Disclosure.Panel>
        </Disclosure.Button>
      )}
    </Disclosure>
  )
}

export default Step
