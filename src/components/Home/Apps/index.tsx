import Button from '@/components/Common/Button'
import Contact from '@/components/Common/Contact'
import { useState } from 'react'
const DATA = [
  {
    image: '01.jpg',
    title: 'Almacenamiento de agua potable',
    description: 'Asegurando que cada hogar, negocio y comunidad tenga acceso a agua limpia y segura en todo momento.',
  },
  {
    image: '02.png',
    title: 'Para redes contra incendios',
    description:
      'Garantizan un suministro inmediato y efectivo de agua en situaciones críticas, contribuyendo a la seguridad y protección de comunidades, industrias y edificaciones.',
  },
  {
    image: '03.jpg',
    title: 'Para usos industriales',
    description:
      'Optimizan la eficiencia y seguridad en la gestión de líquidos, contribuyendo al éxito y la sostenibilidad de operaciones industriales.',
  },
  {
    image: '04.png',
    title: 'Para otros usos',
    description:
      'Maximiza el rendimiento y la sostenibilidad de sus actividades en diversos sectores como agroindustria, ganadería, piscicultura, etc.',
  },
]

const Apps = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-center py-20 bg-gray-100">
      <div className="container">
        <h4 className="mb-20 text-[40px] lg:text-[70px] font-[900] text-black px-5 lg:px-0">APLICACIONES</h4>
        <div className="grid items-center grid-cols-1 gap-12 2xl:grid-cols-2 apps-separator">
          {DATA.map((item, index) => (
            <div className="flex flex-col items-start gap-8 px-5 lg:px-0" key={index}>
              <div className="w-full lg:w-[600px] h-[230px]">
                <img
                  src={`/images/aplicaciones/${item.image}`}
                  alt="Agua Potable"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col w-full">
                <h4 className="mb-5 text-[38px] font-[900] leading-[38px]">{item.title}</h4>
                <p className="mb-5 text-lg">{item.description}</p>
                <div className="flex items-center justify-end gap-5">
                  <Button onClick={() => setOpen(!open)}>Cotizar</Button>
                  {(index === 0 || index === 1) && (
                    <a href="/aplicaciones" className="text-black underline cursor-pointer font-[600]">
                      Ver más
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {open && <Contact setOpen={setOpen} />}
    </div>
  )
}

export default Apps
