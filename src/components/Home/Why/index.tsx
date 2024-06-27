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
      'Suministros rápidos debido a la existencia de paneles standard en stock, así que podemos no hay demoras logísticas en la instalación del tanque que necesitas.',
  },
  {
    title: 'Eficiecia',
    description:
      'Ensamblados rápidos y automatizados a un bajo costo de montaje, no necesitan los elevados costos de la soldadura.',
  },
  {
    title: 'Economía',
    description: 'Desmontaje fácil y económico, así que si necesitas trasladarlo de ubicación, no hay ningún problema.',
  },
  {
    title: 'Garantía',
    description:
      'Las conexiones atornilladas y el mástico sellador especial garantizan un depósito libre de fugas. Lo instalamos y te olvidas de problemas con el tanque.',
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
