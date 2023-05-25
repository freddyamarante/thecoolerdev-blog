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
  const mode = primary ? 'text-blue-500 font-semibold' : 'text-red-500'
  return (
    <button
      type="button"
      className={`${mode}`}
      {...props}
      onClick={() => alert('something')}
    >
      {label}
    </button>
  )
}
