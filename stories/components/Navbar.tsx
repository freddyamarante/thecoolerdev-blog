import NavElement from './NavElement'
import Status from './Status'

interface NavbarProps {
  elements?: string[]
}

const Navbar = ({ elements }: NavbarProps) => {
  let listElements

  if (elements) {
    listElements = elements.map((element) => (
      <NavElement label={element} key={element} />
    ))
  }

  return (
    <nav className="flex justify-between bg-night w-full rounded-3xl p-3">
      <Status />
      <div className="flex gap-5">{listElements}</div>
    </nav>
  )
}

export default Navbar
