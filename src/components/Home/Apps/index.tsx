import Button from '@/components/Common/Button'
const DATA = [
  {
    image: '01.jpg',
    title: 'Sistema contra Incendio',
    description: '1 Tanques x 1200 m3.',
    ubication: 'Mosquera - Cundinamarca.',
  },
  {
    image: '02.jpg',
    title: 'Agroindustrial.',
    description: '1 Tanque x 50 m3.',
    ubication: 'Rivera - Huila.',
  },
  {
    image: '03.jpg',
    title: 'Agua Potable.',
    description: '2 Tanques x 20 m3.',
    ubication: 'Candelaria - Valle del Cauca.',
  },
  {
    image: '04.jpg',
    title: 'Sistema contra Incendio.',
    description: '1 Tanques x 442 m3.',
    ubication: 'Tocancipá - Cundinamarca.',
  },
  {
    image: '05.png',
    title: 'Agroindustrial.',
    description: '2 Tanques x 334 m3.',
    ubication: 'Guarne - Antioquia.',
  },
  {
    image: '06.png',
    title: 'Captación de Agua de Lluvia.',
    description: '1 Tanque x 334 m3.',
    ubication: 'Pereira - Risaralda.',
  },
  {
    image: '07.png',
    title: 'Planta de Tratamiento',
    description: '1 Tanque x 30 m3.',
    ubication: 'Suba - Bogotá.',
  },
  {
    image: '08.png',
    title: 'Agua Potable.',
    description: '1 Tanque x 12 m3.',
    ubication: 'Villa Nueva - Casanare',
  },
  {
    image: '09.png',
    title: 'Proyecto de Construcción Vial.',
    description: '1 Tanque x 100 m3',
    ubication: 'Puerto Berrio - Antioquia',
  },
  {
    image: '10.png',
    title: 'Agua para Riego.',
    description: '1 Tanque x 1200 m3',
    ubication: 'Pijao - Quindío.',
  },
  {
    image: '11.png',
    title: 'Sistema contra Incendio.',
    description: '1 Tanque x 224 m3.',
    ubication: 'Rubiales - Meta..',
  },
  {
    image: '12.png',
    title: 'Industria Cementera.',
    description: '1 Tanque x 50 m3.',
    ubication: 'Zipaquirá– Cundinamarca.',
  },
]

const Apps = () => {
  return (
    <div className="flex justify-center py-20 bg-gray-100">
      <div className="container">
        <h4 className="mb-20 text-[70px] font-[900] text-black">APLICACIONES</h4>
        <div className="grid items-center grid-cols-1 gap-12 2xl:grid-cols-2 apps-separator">
          {DATA.map((item, index) => (
            <div className="flex items-start gap-8" key={index}>
              <div className="w-[600px] h-[230px]">
                <img src={`/images/tanques/${item.image}`} alt="Agua Potable" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col w-full">
                <h4 className="mb-5 text-[38px] font-[900] leading-[38px]">{item.title}</h4>
                <p className="text-sm">
                  <b>Cantidad x Capacidad:</b> {item.description}
                </p>
                <p className="mb-10 text-sm">
                  <b>Ubicación:</b> {item.ubication}
                </p>
                <div className="flex items-center justify-end gap-5">
                  <a href="/contacto">
                    <Button>Cotizar</Button>
                  </a>
                  <a href="/aplicaciones" className="text-black underline cursor-pointer font-[600]">
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Apps
