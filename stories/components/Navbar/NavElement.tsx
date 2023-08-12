interface NavElementProps {
  label: string
  active?: boolean
  id: string
}

const NavElement = ({
  label = 'element',
  active = false,
  id = '',
}: NavElementProps) => {
  return (
    <a
      href={`#${id}`}
      className={`flex text-2xl md:text-lg lg:text-xl leading-none py-2 md:py-1 px-2 rounded-xl cursor-pointer hover:bg-night-light focus:bg-night-dark ${
        active ? 'bg-cloud text-night' : 'text-white'
      }`}
    >
      {label}
    </a>
  )
}

export default NavElement
