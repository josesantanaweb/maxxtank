import Button from '@/components/Common/Button'

const DATA = [
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
  },
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
  },
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
  },
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation',
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
              <img src={`/images/${item.image}`} alt="Agua Potable" className="object-cover w-[330px] h-[230px]" />
              <div className="flex flex-col">
                <h4 className="mb-5 text-[38px] font-[900] leading-[38px]">{item.title}</h4>
                <p className="mb-10 text-sm">{item.description}</p>
                <div className="flex items-center justify-end gap-5">
                  <Button>Cotizar</Button>
                  <a href="#" className="text-black underline cursor-pointer font-[600]">
                    Ver mas
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
