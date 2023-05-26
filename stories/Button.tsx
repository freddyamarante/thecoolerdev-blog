interface ButtonProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className="rounded-3xl text-md flex items-center justify-center px-8 py-4 font-bold uppercase leading-none text-neutral-800 border-2 border-neutral-800 bg-neutral-50 mx-auto text-border-black"
      {...props}
    >
      {label}
    </button>
  )
}
