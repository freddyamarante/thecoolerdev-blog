import { ArrowRight } from './resources/Icons'

interface ButtonProps {
  mode?: 'primary' | 'contrast' | 'simple'
  size?: 'small' | 'medium' | 'large' | 'extralarge'
  label: string
  onClick?: () => void
}

const Button = ({
  mode = 'primary',
  size = 'large',
  label,
  ...props
}: ButtonProps) => {
  let modeClasses: string = mode

  switch (mode) {
    case 'primary':
      modeClasses = 'bg-taxi text-night-dark'
      break
    case 'contrast':
      modeClasses = 'bg-night-dark text-white'
      break
    case 'simple':
      modeClasses = 'bg-transparent text-night-dark border-2 border-night'
      break
  }

  let sizeClasses: string = size
  let iconSize: number = 0

  switch (size) {
    case 'extralarge':
      sizeClasses = 'text-xl md:text-2xl lg:text-3xl p-2 md:p-3'
      iconSize = 20
      break
    case 'large':
      sizeClasses = 'text-2xl'
      iconSize = 18
      break
    case 'medium':
      sizeClasses = 'text-md'
      iconSize = 14
      break
    case 'small':
      sizeClasses = 'text-sm p-2'
      iconSize = 10
      break
  }

  return (
    <button
      type="button"
      className={`flex flex-row w-fit rounded-lg justify-center items-center leading-none gap-1 ${modeClasses} ${sizeClasses}`}
      {...props}
    >
      {label}
      <ArrowRight size={iconSize} />
    </button>
  )
}

export default Button
