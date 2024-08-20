import Button from '@/components/Common/Button'
import { Link } from 'react-router-dom'

const DATA = [
  {
    title: 'FM Approved',
    description: 'Cuenta con certificación FM y conforme a la norma NFPA-22 y UNE23500 ',
  },
  {
    title: 'Norma AWWA D-103-09',
    description:
      'Los tanques son fabricados de acuerdo a esta norma “Factory Coated Bolted Steel Tanks for Water Storage”.',
  },
  {
    title: 'Paneles RV8',
    description:
      'Páneles de acero galvanizado y corrugados recubiertos con ProteCoat y unidos con pernos de alta resistencia,.',
  },
]

const Storage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white">
      <div className="container mb-10">
        <h4 className="mb-8 text-[83px] font-[900] text-black leading-[80px]">
          ALMACENAMIENTO PARA <br /> REDES CONTRA INCENDIO
        </h4>
        <p className="mb-10 text-[53px] text-black leading-[60px]">
          Tanques modulares pernados según normativa NFPA-22 *Norma para tanques de agua para la protección contra
          incendios.
        </p>
        <img src="/images/app-tank-3.png" alt="tank" className="w-full h-[800px]" />
      </div>
      <div className="container mb-10">
        <div className="grid grid-cols-4 gap-3">
          {DATA.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <h4 className="mb-3 text-[22px] font-[900] text-black">{item.title}</h4>
              <p className="text-base text-black">{item.description}</p>
            </div>
          ))}
          <div className="flex flex-col">
            <h4 className="mb-5 text-[27px] font-[900] text-black leading-[30px]">
              Nuestro tanque de uso mixto permite extraer agua potable hasta un nivel predeterminado sin usar el agua de
              reserva de R.C.I.
            </h4>
            <div className="flex justify-end w-full">
              <Link to="/contacto">
                <Button>Cotizar</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex justify-start gap-10 mb-14">
        <div className="text-[40px] text-black leading-[60px] font-[600]">
          <li>Diámetros desde 3 m hasta 30 m</li>
          <li>Capacidades desde 20 m3 hasta 8000 m3</li>
          <li>Altura desde 3 m hasta 12 m</li>
        </div>
      </div>
    </div>
  )
}

export default Storage
