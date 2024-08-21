import Button from '@/components/Common/Button'
import { Link } from 'react-router-dom'
const Tanks = () => {
  return (
    <div>
      <div className="flex justify-center py-20 bg-gray-800 lg:py-40">
        <div className="container flex flex-col justify-start px-5 lg:px-0">
          <h4 className="mb-10 text-[40px] lg:text-[77px] font-[900] text-white">TANQUES</h4>
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-3">
            <ul>
              <li className="py-3 text-[24px] lg:text-[34px] text-white border-b border-dashed font-[900]">
                Diseño & Ingeniería
              </li>
              <li className="py-3 text-[24px] lg:text-[34px] text-white border-b border-dashed font-[900]">Armado</li>
              <li className="py-3 text-[24px] lg:text-[34px] text-white border-b border-dashed font-[900]">Paneles</li>
              <li className="py-3 text-[24px] lg:text-[34px] text-white border-b border-dashed font-[900]">
                Impermeabilización
              </li>
            </ul>
            <div className="relative flex flex-col items-center">
              <img src="/images/abstract-figure.svg" className="absolute w-24 -top-[7rem] hidden lg:block" />
              <img src="/images/tank-render.png" alt="" />
              <h4 className="mb-5 text-[33px] text-center text-white font-[600] leading-[40px]">
                Diseño, instalación <br /> y uso de materiales certificados
              </h4>
              <div className="flex justify-center">
                <Link to="/contacto">
                  <Button>Saber más</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-[34px] text-white font-[900] capitalize mb-5">Ingeniería</h4>
              <p className="text-lg text-white">
                En MaxxTank tenemos la capacidad de diseñar soluciones a la medida y bajo normas aplicables según
                industria o aplicación. Nuestra ingeniería toma en cuenta reglamentaciones locales e internacionales,
                como la NSR-10, ACI-350-3, AWWA D103-19, NFPA-22, API-650 y otras que estén especificadas en su
                proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tanks
