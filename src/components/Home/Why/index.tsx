import Item from './Item'

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
]

const Why = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="container">
        <h4 className="mb-20 text-[40px] lg:text-[80px] font-[900] text-black">¿POR QUÉ MAXX TANK?</h4>
        <div className="flex flex-col">
          {DATA.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Why
