import Button from '@/components/Common/Button'
import Contact from '@/components/Common/Contact'
import { useState } from 'react'

const DATA = [
  {
    title: 'Tecnología australiana',
    description:
      'Material impermeabilizante independiente de la estructura metalica de soporte, lo que evita el contacto directo del agua con la estructura.',
  },
  {
    title: 'Norma AWWA D-103-09',
    description:
      'Los tanques son fabricados de acuerdo a esta norma “Factory Coated Bolted Steel Tanks for Water Storage”.',
  },
  {
    title: 'Paneles RV8',
    description:
      'Páneles de acero galvanizado y corrugados recubiertos con ProteCoat y unidos con pernos de alta resistencia,. ',
  },
]

const Storage = ({ ref }: any) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white" ref={ref}>
      <div className="container mb-10">
        <h4 className="mb-8 text-[83px] font-[900] text-black leading-[80px]">
          ALMACENAMIENTO
          <br /> DE AGUA POTABLE
        </h4>
        <p className="mb-10 text-[53px] text-black leading-[50px]">
          Tanques modulares pernados con recubrimiento para almacenamiento de agua potable.
        </p>
        <img src="/images/app-tank-2.jpg" alt="tank" className="w-full h-[800px]" />
      </div>
      <div className="container">
        <div className="grid grid-cols-4 gap-3 mb-10">
          {DATA.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <h4 className="mb-3 text-[22px] font-[900] text-black">{item.title}</h4>
              <p className="text-base text-black">{item.description}</p>
            </div>
          ))}
          <div className="flex flex-col">
            <h4 className="mb-5 text-[27px] font-[900] text-black leading-[30px]">
              Estructura resistente y funcional para el almacenamiento de agua potable
            </h4>
            <div className="flex justify-start w-full">
              <Button onClick={() => setOpen(!open)}>Cotizar</Button>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-10 mb-14">
          <div className="text-[40px] text-black leading-[60px] font-[600]">
            <li>Diámetros desde 3 m hasta 30 m</li>
            <li>Capacidades desde 20 m3 hasta 8000 m3</li>
            <li>Altura desde 3 m hasta 12 m</li>
          </div>
        </div>
      </div>
      {open && <Contact setOpen={setOpen} />}
    </div>
  )
}

export default Storage
