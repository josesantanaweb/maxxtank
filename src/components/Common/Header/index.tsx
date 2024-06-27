import { IoIosClose, IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'

const MENU_DATA = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Aplicaciones',
    url: '/aplicaciones',
  },
  {
    name: 'Tanques',
    url: '/tanques',
  },
  {
    name: 'Proyectos',
    url: '/proyectos',
  },
  {
    name: 'Contacto',
    url: '/contacto',
  },
]

const Header = () => {
  return (
    <header className="">
      <div className="flex items-center justify-center bg-gray-200">
        <div className="container relative flex justify-center p-3">
          <p className="text-sm font-semibold text-gray-800">
            Tel: 314 245 2758 gerencia@maxxtank.com.co <span className="underline">Contáctanos</span>
          </p>
          <div className="absolute right-0 cursor-pointer">
            <IoIosClose size={24} />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="container flex items-center justify-between mx-auto">
          <img src="/images/logo.svg" className="w-[120px]" />
          <nav className="flex gap-4">
            {MENU_DATA.map((item, index) => (
              <Link
                key={index}
                to={item.url}
                className="px-4 text-gray-800 transition-all border-b-2 border-transparent cursor-pointer hover:text-gray-600 hover:border-gray-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <span className="text-gray-800">
            <IoIosSearch size={24} />
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
