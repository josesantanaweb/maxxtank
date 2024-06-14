import { IoIosClose, IoIosSearch } from 'react-icons/io'

const MENU_DATA = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Aplicaciones',
    url: '/Aplicaciones',
  },
  {
    name: 'Tanques',
    url: '/Tanques',
  },
  {
    name: 'Proyectos',
    url: '/Proyectos',
  },
  {
    name: 'Contacto',
    url: '/Contacto',
  },
]

const Header = () => {
  return (
    <header className="">
      <div className="flex items-center justify-center bg-slate-200">
        <div className="container flex justify-between p-3">
          <p className="text-sm text-gray-800 text-end">Tel: 314 245 2758 gerencia@maxxtank.com.co Contáctanos</p>
          <div className="cursor-pointer">
            <IoIosClose size={24} />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <div className="container flex items-center justify-between mx-auto">
          <img src="/images/logo.svg" className="w-[120px]" />
          <nav className="flex gap-4">
            {MENU_DATA.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="px-4 text-gray-800 cursor-pointer hover:text-gray-600 hover:font-bold"
              >
                {item.name}
              </a>
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
