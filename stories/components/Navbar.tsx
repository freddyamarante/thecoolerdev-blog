import NavElement from './NavElement'
import Status from './Status'
import { Bars3, XMark } from '../resources/Icons'
import { Disclosure } from '@headlessui/react'

interface NavbarProps {
  elements?: string[]
}

const Navbar = ({ elements }: NavbarProps) => {
  let listElements: JSX.Element[]

  if (elements) {
    listElements = elements.map((element) => (
      <NavElement label={element} key={element} />
    ))
  }

  return (
    <Disclosure as="nav" className="bg-night w-full rounded-3xl px-3">
      {({ open }) => (
        <div className="flex flex-col justify-start">
          <div className="flex flex-row justify-between">
            <Status />

            {/* Mobile navigation elements */}
            <Disclosure.Button className="flex md:hidden rounded-xl p-2 my-3 text-white hover:bg-dark-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMark aria-hidden="true" />
              ) : (
                <Bars3 aria-hidden="true" />
              )}
            </Disclosure.Button>

            {/* Desktop navigation elements */}
            <a className="hidden md:flex gap-5 py-5">{listElements}</a>
          </div>

          {/* Dropdown */}
          <Disclosure.Panel className="md:hidden">
            <div className="py-4">{listElements}</div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default Navbar
