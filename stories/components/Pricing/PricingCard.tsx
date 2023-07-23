interface PricingCardProps {
  title?: string
  description?: string
  price?: number
  included?: string[]
  highlight?: boolean
}

const PricingCard = ({
  title,
  description,
  price,
  highlight = false,
}: PricingCardProps) => {
  return <div className="rounded-2xl p-12"></div>
}

export default PricingCard
