'use client'

import Step from './Step'

import { useState } from 'react'

interface StepsProps {
  steps?: {
    number?: number
    title: string
    description: string
  }[]
}

const Steps = ({ steps }: StepsProps) => {
  const [openStepIndex, setOpenStepIndex] = useState<number | null>(null)

  const handleStepToggle = (index: number) => {
    setOpenStepIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-7 w-full">
      {steps &&
        steps.map((step, index) => (
          <Step
            key={index}
            number={index}
            title={step.title}
            description={step.description}
            isOpen={index === openStepIndex}
            onToggle={() => handleStepToggle(index)}
          />
        ))}
    </div>
  )
}

export default Steps
