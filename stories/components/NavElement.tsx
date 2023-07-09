interface NavElementProps {
  label: string
  active?: boolean
}

const NavElement = ({ label = 'element', active = false }: NavElementProps) => {
  return (
    <div
      className={`flex justify-center items-center text-xl leading-none py-1 px-2 rounded-xl ${
        active ? 'bg-cloud text-night' : 'text-white'
      }`}
    >
      {label}
    </div>
  )
}

export default NavElement
