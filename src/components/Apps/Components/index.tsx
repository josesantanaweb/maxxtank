import { useState } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'

const DATA = [
  {
    title: 'Paneles R8V con Recubrimiento ProteCoat Exterior- Interior',
  },
  {
    title: 'Membrana Impermeabilizante en PVC Reforzado',
  },
  {
    title: 'Estructura Techo Metálico auto portante inoxidable',
  },
  {
    title: 'Cubierta standing Seam con escotilla y ventilador',
  },
  {
    title: 'Tornillería Inoxidable Tratamiento ZINCCOAT',
  },
  {
    title: 'Acoples Acometidas (Según Requerimiento)',
  },
  {
    title: 'Anti-Vortex (según requerimiento)',
  },
  {
    title: 'Dos (2) Reboses Laterales de 2 veces diámetro de acometida',
  },
  {
    title: 'Escalera de Acceso con plataforma y protector',
  },
  {
    title: 'Manholle (ingreso Hombre) inferior',
  },
  {
    title: 'Visor de Nivel Importado',
  },
  {
    title: 'Brida (según requerimiento)',
  },
]

const SLIDES = ['slider-1', 'slider-2', 'slider-3', 'slider-4', 'slider-5']
const Components = () => {
  const [imagen, setImagen] = useState<string>('slider-1')

  const handlePrev = () => setImagen(`${SLIDES[Math.max(SLIDES.indexOf(imagen) - 1, 0)]}`)
  const handleNext = () => setImagen(`${SLIDES[Math.min(SLIDES.indexOf(imagen) + 1, 4)]}`)

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white">
      <div className="container">
        <h4 className="text-[83px] font-[900] text-black leading-[80px] mb-14">COMPONENTES</h4>
        <div className="relative flex justify-between gap-20">
          <div className="w-1/2 p-6 bg-gray-100">
            <div className="relative flex justify-center w-full mb-4">
              <img src={`/images/${imagen}.png`} className="w-full h-[400px] transition-all" />
              <div className="absolute left-0 flex items-center justify-between w-full px-5 top-1/2 -translate-y-2/4">
                <span
                  onClick={handlePrev}
                  className="flex items-center justify-center w-10 h-10 text-xl bg-white rounded-full cursor-pointer bg-opacity-70 text-primary-100"
                >
                  <FaAngleLeft />
                </span>
                <span
                  onClick={handleNext}
                  className="flex items-center justify-center w-10 h-10 text-xl bg-white rounded-full cursor-pointer bg-opacity-70 text-primary-100"
                >
                  <FaAngleRight />
                </span>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {SLIDES.map((slide, index) => (
                <img
                  key={index}
                  src={`/images/${slide}.png`}
                  className={`w-full h-[75px] cursor-pointer ${imagen === slide ? 'opacity-100' : 'opacity-50'}`}
                  onClick={() => setImagen(slide)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            {DATA.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-1 border-b border-black border-dashed cursor-pointer"
              >
                <p>{item.title}</p>
                {/* <span className="text-2xl cursor-pointer font-[900]">+</span> */}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Components
