const DATA = [
  {
    title: 'Tecnología',
    description:
      'Tecnología australiana adaptada de útima generación con paneles diseñados para garantizar larga vida útil.',
  },
  {
    title: 'Economía',
    description: 'Menor Costo por litro almacenado del mercado.',
  },
  {
    title: 'Alcance',
    description:
      'Mínima obra civil y montaje fácil y rápido (Tanque de 500 m3, máximo una semana), hace posible su instalaciónhasta en los sitios más remotos.',
  },
  {
    title: 'Resistencia',
    description: 'Buena resistencia antisísmica.',
  },
  {
    title: 'Salubridad',
    description: 'Materiales certificados para asegurar la calidad del agua potable.',
  },
  {
    title: 'Eficiencia',
    description:
      'Facilidad para transporte en tanques de mediana y gran capacidad (se transportan los módulos y componentes, que solo ocupan máximo el 10 % del volumen del tanque montado).',
  },
  {
    title: 'Garantía',
    description: 'Fácil y económico mantenimiento, que alarga la expectativa de duración por más de veinte años.',
  },
  {
    title: 'Estética',
    description: 'Acabado personalizado para un resultado estético y profesional.',
  },
]

const Advantages = () => {
  return (
    <div className="relative">
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h4 className="font-[900] text-black text-[83px] mb-10">VENTAJAS</h4>
          {DATA.map((item, index) => (
            <div
              key={index}
              className="flex items-center mx-auto max-w-[90rem] border-t border-dashed py-6 border-black justify-around"
            >
              <h6 className="text-black font-[900] text-[27px] w-[50%] px-20">{item.title}</h6>
              <p className="text-black text-[20px] w-[50%] ">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Advantages
