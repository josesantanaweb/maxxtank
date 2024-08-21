const DATA = [
  {
    image: '01.jpg',
    title: 'Sistema contra incendio',
    description: '1 Tanques x 1200 m3',
    ubication: 'Mosquera - Cundinamarca',
  },
  {
    image: '02.jpg',
    title: 'Agroindustrial',
    description: '1 Tanque x 50 m3',
    ubication: 'Rivera - Huila',
  },
  {
    image: '03.jpg',
    title: 'Agua potable',
    description: '2 Tanques x 20 m3',
    ubication: 'Candelaria - Valle del Cauca.',
  },
  {
    image: '04.jpg',
    title: 'Sistema contra incendio',
    description: '1 Tanques x 442 m3',
    ubication: 'Tocancipá - Cundinamarca',
  },
  {
    image: '05.png',
    title: 'Agroindustrial',
    description: '2 Tanques x 334 m3',
    ubication: 'Guarne - Antioquia',
  },
  {
    image: '06.png',
    title: 'Captación de agua de lluvia',
    description: '1 Tanque x 334 m3',
    ubication: 'Pereira - Risaralda',
  },
  {
    image: '07.png',
    title: 'Planta de tratamiento',
    description: '1 Tanque x 30 m3',
    ubication: 'Suba - Bogotá',
  },
  {
    image: '08.png',
    title: 'Agua potable',
    description: '1 Tanque x 12 m3',
    ubication: 'Villa Nueva - Casanare',
  },
  {
    image: '09.png',
    title: 'Proyecto de construcción vial',
    description: '1 Tanque x 100 m3',
    ubication: 'Puerto Berrio - Antioquia',
  },
  {
    image: '10.png',
    title: 'Agua para riego.',
    description: '1 Tanque x 1200 m3',
    ubication: 'Pijao - Quindío.',
  },
  {
    image: '11.png',
    title: 'Sistema contra incendio',
    description: '1 Tanque x 224 m3',
    ubication: 'Rubiales - Meta',
  },
  {
    image: '12.png',
    title: 'Industria cementera',
    description: '1 Tanque x 50 m3',
    ubication: 'Zipaquirá– Cundinamarca',
  },
]

const Projects = () => {
  return (
    <div className="flex justify-center py-20">
      <div className="container px-5 lg:px-0">
        <h4 className="mb-20 text-[40px] lg:text-[83px] font-[900] text-black">PROYECTOS</h4>
        <div className="grid items-center grid-cols-1 gap-8 lg:-cols-4">
          {DATA.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <img src={`/images/tanques/${item.image}`} alt="" className="mb-3 md:h-[230px] 2xl:h-[280px]" />
              <h4 className="mb-1 text-lg font-semibold text-black">{item.title}</h4>
              <p className="text-base text-black">
                <b>Cantidad: </b>
                {item.description}
              </p>
              <p className="text-base text-black">
                <b>Ubicación: </b>
                {item.ubication}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
