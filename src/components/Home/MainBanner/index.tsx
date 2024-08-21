import Button from '@/components/Common/Button'
import Video from '@/components/Common/Video'
import { useState } from 'react'
import { IoIosPlay } from 'react-icons/io'

const MainBanner = () => {
  const [openVideo, setOpenVideo] = useState(false)
  return (
    <div className="flex justify-center mb-10">
      <div className="container fle flex-col lg:flex-row items-center justify-between lg:h-[600px] gap-10 mx-auto">
        <div className="flex flex-col items-start justify-center lg:w-[40%] 2xl:w-[35%] h-auto lg:h-full">
          <h4 className="text-center lg:text-left mb-3 text-[32px] lg:text-[42px] 2xl:text-[64px] font-[900] text-black leading-[42px] 2xl:leading-[65px]">
            EL AGUA
            <br /> ES VIDA Y NOSOTROS LA RESGUARDAMOS
          </h4>
          <p className="mb-10 text-[29px] text-black font-medium leading-[30px] text-center lg:text-left">
            Liderazgo tecnológico en el diseño e instalación de tanques para almacenamiento de agua y otros líquidos.
          </p>
          <div className="justify-end hidden w-full lg:flex">
            <Button onClick={() => setOpenVideo(!openVideo)}>
              Ver Video
              <IoIosPlay size={18} />
            </Button>
          </div>
        </div>
        <div className="relative flex items-center lg:w-[60%] 2xl:w-[65%] h-[400px] lg:h-full overflow-hidden">
          <img src="/images/banner-main.png" className="object-cover w-full h-full" />
        </div>
      </div>
      {openVideo && <Video setOpenVideo={setOpenVideo} />}
    </div>
  )
}

export default MainBanner
