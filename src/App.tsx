import { IoIosClose, IoIosPlay, IoIosSearch } from 'react-icons/io'

function App() {
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
  return (
    <div>
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
      <main>
        <div className="flex justify-center mb-10">
          <div className="flex items-center justify-between h-[600px] pl-20 gap-10">
            <div className="flex flex-col items-start justify-center w-1/2 h-full">
              <h4 className="mb-3 text-4xl font-bold text-gray-800">EL AGUA ES VIDA Y NOSOTROS LA RESGUARDAMOS</h4>
              <p className="mb-10 text-2xl text-gray-800">
                Liderazgo tecnológico en el diseño e instalación de tanques para almacenamiento de agua y otros
                líquidos.
              </p>
              <button className="flex items-center justify-center gap-1 px-4 py-3 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Ver Video
                <IoIosPlay size={18} />
              </button>
            </div>
            <div className="relative flex items-center w-1/2 h-full">
              <img src="/images/banner-main.png" className="w-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-10 bg-gray-200">
          <div className="container flex justify-start">
            <h4 className="text-4xl font-bold text-gray-800">SOBRE MAXXTANK</h4>
          </div>
        </div>
        <div className="relative h-[1000px] w-full">
          <img src="/images/banner-about-us.png" alt="banner" className="h-full" />
        </div>
        <div className="flex justify-center py-10 bg-gray-200">
          <div className="container">
            <div className="flex justify-center gap-10 mb-14">
              <img src="/images/logo.svg" alt="banner" className="w-[160px]" />
              <h4 className="text-4xl text-gray-800">
                Experiencia, tecnología e ingenería para ofrecer soluciones adaptadas a cada proyecto.
              </h4>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-1/4">
                <h4 className="text-lg font-semibold text-gray-800">Propósito</h4>
                <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
              </div>
              <div className="w-1/4">
                <h4 className="text-lg font-semibold text-gray-800">Misión</h4>
                <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
              </div>
              <div className="w-1/4">
                <h4 className="text-lg font-semibold text-gray-800">Visión</h4>
                <p className="text-sm text-gray-800">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
              </div>
              <div className="flex flex-col justify-center w-1/4">
                <img src="/images/video-preview.png" alt="video" className="w-[170px] mb-4 h-[140px]" />
                <p className="text-sm text-gray-800">Conoce más en nuestro video corporativo </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
