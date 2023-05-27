interface ButtonProps {
  primary?: boolean
  size?: 'small' | 'medium' | 'large'
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
  return (
    <button
      type="button"
      className={`rounded-3xl text-md flex items-center justify-center px-8 py-4 font-bold uppercase leading-none border-2 text-neutral-800 border-neutral-800 mx-auto ${mode}`}
      {...props}
    >
      {label}
    </button>
  )
}
