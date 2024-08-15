import { IoIosAdd } from 'react-icons/io'

const DATA = [
  {
    title: 'Ingeniería',
    description:
      'Adaptabilidad a cada diseño para capacidades entre los 20 y 8.000 m3, lo que significa que diseñamos soluciones específicas para cada proyecto.',
  },
  {
    title: 'Disponibilidad',
    description:
      'Nuestra tecnología de paneles patentados nos permite mantener una existencia de paneles y piezas estándar, lo cual nos permite completar rápidamente el diseño y fabricación de su proyecto así como instalar en tiempo récord.',
  },
  {
    title: 'Eficiecia',
    description:
      'Nuestros tanques son una solución flexible y personalizada, adaptable a su proyecto en forma y capacidades, asimismo representan una ventaja en instalación y mantenimiento, disminuyendo costos de construcción, operación y transporte a lo largo de todo su proyecto.',
  },
  {
    title: 'Economía',
    description:
      'Los tanques MaxxTank son más sostenibles debido a su durabilidad y capacidad de reutilización, ampliación o movilización, lo que reduce la necesidad de reinversiones para el mismo propósito.',
  },
  {
    title: 'Ingeniería',
    description:
      'En MaxxTank tenemos la capacidad de diseñar soluciones a la medida y bajo normas aplicables según industria o aplicación. Nuestra ingeniería toma en cuenta reglamentaciones locales e internacionales, como la NSR-10, ACI-350-3, AWWA D103-19, NFPA-22, API-650 y otras que estén especificadas en su proyecto.',
  },
]

const Why = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="container">
        <h4 className="mb-20 text-[80px] font-[900] text-black">LOS 5 POR QUÉ DE MAXX TANK</h4>
        <div className="flex flex-col">
          {DATA.map((item, index) => (
            <div
              key={index}
              className="grid items-center justify-between grid-cols-3 px-10 py-6 border-t border-gray-400 last:border-b"
            >
              <h4 className="text-lg font-[900]">{item.title}</h4>
              <p className="block text-[16px]">{item.description}</p>
              <span className="flex justify-end cursor-pointer">
                <IoIosAdd size={28} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Why
