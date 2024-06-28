import Button from '@/components/Common/Button'
import { IoIosPlay } from 'react-icons/io'

const MainBanner = () => {
  return (
    <div className="flex justify-center mb-10">
      <div className="container flex items-center justify-between h-[600px] gap-10">
        <div className="flex flex-col items-start justify-center w-[35%] h-full">
          <h4 className="mb-3 text-[64px] font-[900] text-black leading-[65px]">
            EL AGUA
            <br /> ES VIDA Y NOSOTROS LA RESGUARDAMOS
          </h4>
          <p className="mb-10 text-[29px] text-black font-medium leading-[30px]">
            Liderazgo tecnológico en el diseño e instalación de tanques para almacenamiento de agua y otros líquidos.
          </p>
          <div className="flex justify-end w-full">
            <Button>
              Ver Video
              <IoIosPlay size={18} />
            </Button>
          </div>
        </div>
        <div className="relative flex items-center w-[65%] h-full overflow-hidden">
          <img src="/images/banner-main.png" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default MainBanner
