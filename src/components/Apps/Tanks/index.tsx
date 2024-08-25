const DATA = [
  {
    image: 'tank-01.png',
    code: '3POTX4',
  },
  {
    image: 'tank-02.png',
    code: '3POTX13',
  },
  {
    image: 'tank-03.png',
    code: '5POTX14',
  },
  {
    image: 'tank-04.png',
    code: '6POTX16',
  },
]

const Tanks = () => {
  return (
    <div className="relative py-12 bg-gradient-to-r from-primary-100 to-primary-200">
      <div className="container mx-auto">
        <h3 className="text-white text-[47px] mb-6">Conoce en detalle alguno de nuestros tanques</h3>
        <div className="grid grid-cols-4 gap-10 mb-10">
          {DATA.map((item, index) => (
            <div key={index} className="relative">
              <div className="p-10 bg-white">
                <div className="flex items-center justify-center mb-4">
                  <img src={`/images/${item.image}`} alt="Tanque" className="w-full h-full" />
                </div>
                <h4 className="text-black font-[900] text-[36px] text-center mb-6">{item.code}</h4>
                <div className="flex justify-end w-full">
                  <a href="#" className="text-black font-[600] underline">
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <a href="#" className="flex items-center gap-4 cursor-pointer">
            <img src="/images/arrow-down.svg" alt="arrow" className="w-[60px] h-[60px]" />
            <p className="font-[600] text-white text-[26px]">Ver todos</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Tanks
