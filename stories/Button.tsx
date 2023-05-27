interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large' | 'extralarge'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'bg-cobalt' : `bg-orange`
  let sizeClasses: string = size

  switch (size) {
    case 'extralarge':
      sizeClasses = 'text-2xl px-8 pt-4 pb-5'
      break
    case 'large':
      sizeClasses = 'text-xl px-8 pt-4 pb-5'
      break
    case 'medium':
      sizeClasses = 'text-md px-8 py-4'
      break
    case 'small':
      sizeClasses = 'text-sm px-8 py-4'
      break
  }

  return (
    <button
      type="button"
      className={`flex rounded-full items-center justify-center font-semibold uppercase leading-none border-2 text-neutral-800 border-neutral-800 mx-auto ${mode} ${sizeClasses}`}
      {...props}
    >
      {label}
    </button>
  )
}
