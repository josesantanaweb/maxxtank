const DATA = [
  {
    title: '3POTX4',
    diameter: '2,98',
    radio: '1,49',
    height: '3',
    theoreticalCapacity: '21',
    workCapacity: '21',
  },
  {
    title: '3POTX5',
    diameter: '3,72',
    radio: '1,86',
    height: '3',
    theoreticalCapacity: '39',
    workCapacity: '39',
  },
  {
    title: '3POTX6',
    diameter: '4,46',
    radio: '2,23',
    height: '3',
    theoreticalCapacity: '61',
    workCapacity: '61',
  },
  {
    title: '3POTX7',
    diameter: '5,20',
    radio: '2,60',
    height: '3',
    theoreticalCapacity: '86',
    workCapacity: '86',
  },
  {
    title: '3POTX8',
    diameter: '5,94',
    radio: '2,97',
    height: '3',
    theoreticalCapacity: '114',
    workCapacity: '114',
  },
]

const Diameters = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white">
      <div className="container">
        <h4 className="text-[83px] font-[900] text-black leading-[80px] mb-14">DIÁMETROS Y CAPACIDADES</h4>
        <div className="relative mb-10">
          <div className="grid grid-cols-6 gap-4 mb-4">
            <div className="flex items-center justify-center bg-gradient-to-r from-primary-100 to-primary-200">
              <h4 className="text-[27px] font-[900] text-white text-center">REF: TANQUE</h4>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-primary-100 to-primary-200">
              <h4 className="text-[27px] font-[900] text-white text-center">DIÁMETRO (m)</h4>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-primary-100 to-primary-200">
              <h4 className="text-[27px] font-[900] text-white text-center">RADIO (m)</h4>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-primary-100 to-primary-200">
              <h4 className="text-[27px] font-[900] text-white text-center">ALTURA (H)</h4>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-primary-100 to-primary-200">
              <h4 className="text-[27px] font-[900] text-white text-center">
                CAPC.
                <br /> TEÓRICA (m³)
              </h4>
            </div>
            <div className="flex items-center justify-center bg-gradient-to-r from-primary-100 to-primary-200">
              <h4 className="text-[27px] font-[900] text-white text-center">
                CAPC.
                <br /> TRABAJO (m³)
              </h4>
            </div>
          </div>
          {DATA.map((item, index) => (
            <div className="grid grid-cols-6 gap-4 mb-4" key={index}>
              <span className={`${index % 2 !== 0 ? 'bg-gray-300' : 'bg-white'} flex justify-center`}>
                <a href="#" className="text-blue-500 underline text-[27px] text-center">
                  {item.title}
                </a>
              </span>
              <span className={`${index % 2 !== 0 ? 'bg-gray-300' : 'bg-white'} flex justify-center`}>
                <p className="text-black text-[27px]">{item.diameter}</p>
              </span>
              <span className={`${index % 2 !== 0 ? 'bg-gray-300' : 'bg-white'} flex justify-center`}>
                <p className="text-black text-[27px]">{item.radio}</p>
              </span>
              <span className={`${index % 2 !== 0 ? 'bg-gray-300' : 'bg-white'} flex justify-center`}>
                <p className="text-black text-[27px]">{item.height}</p>
              </span>
              <span className={`${index % 2 !== 0 ? 'bg-gray-300' : 'bg-white'} flex justify-center`}>
                <p className="text-black text-[27px]">{item.theoreticalCapacity}</p>
              </span>
              <span className={`${index % 2 !== 0 ? 'bg-gray-300' : 'bg-white'} flex justify-center`}>
                <p className="text-black text-[27px]">{item.workCapacity}</p>
              </span>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-end">
          <div className="flex items-center gap-4">
            <img src="/images/pdf.png" className="w-8" />
            <Button>Descargar</Button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Diameters
