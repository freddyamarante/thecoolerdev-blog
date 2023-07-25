'use client'

import Button from '../Button'
import GradientBackground from '../GradientBackground'
import { Check } from '../resources/Icons'

interface PricingCardProps {
  title?: string
  description?: string
  price?: number
  button?: string
  included?: string[]
  highlight?: boolean
}

const PricingCard = ({
  title,
  description,
  price,
  button = 'Book a call',
  included,
  highlight = false,
}: PricingCardProps) => {
  return (
    <GradientBackground
      backgroundColor={highlight ? '#242423' : '#CFDBD5'}
      gradientColor={highlight ? '#3E3E3D' : '#787891'}
      radius={50}
      className={`rounded-2xl px-12 py-14 flex flex-col  ${
        highlight ? 'text-white ' : 'text-night-dark '
      }`}
    >
      <h3 className={`${highlight ? 'text-taxi' : 'text-night-dark'} text-xl`}>
        {title}
      </h3>
      <h2 className="text-4xl mb-4">
        Starting at <span className="font-bold">${price?.toString()}</span>
      </h2>
      <span className="text-lg mb-6 leading-none">{description}</span>
      <Button label={button} mode={highlight ? 'primary' : 'contrast'} />
      <span className="mt-6 mb-2 font-semibold">What&apos;s included</span>
      {included && (
        <ul className="leading-8">
          {included.map((item, index) => (
            <li key={index} className="flex align-top gap-x-2">
              <Check />
              {item}
            </li>
          ))}
        </ul>
      )}
    </GradientBackground>
  )
}

export default PricingCard
