import Video from '@/components/Common/Video'
import { useState } from 'react'

const AboutUs = () => {
  const [openVideo, setOpenVideo] = useState(false)
  return (
    <div>
      <div className="flex justify-center py-10 bg-gray-100">
        <div className="container flex justify-start">
          <h4 className="text-[40px] lg:text-[80px] font-[900] text-black text-center lg:text-left">SOBRE MAXXTANK</h4>
        </div>
      </div>
      <div className="relative lg:h-[1000px] 2xl:h-full w-full">
        <img src="/images/banner-about-us.png" alt="banner" className="w-full h-full" />
      </div>
      <div className="flex justify-center py-10 bg-gray-100">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-10 lg:items-start mb-14 lg:flex-row">
            <img src="/images/logo.svg" alt="banner" className="w-[160px]" />
            <h4 className="text-[32px] lg:text-[53px] text-black lg:leading-[60px] font-[600] text-center lg:text-left">
              Ingeniería, tecnología y experiencia para ofrecer soluciones adaptadas a cada proyecto.
            </h4>
          </div>
          <div className="flex flex-col items-start justify-between gap-5 lg:flex-row lg:gap-0">
            <div className="px-4 lg:lg:w-1/4">
              <h4 className="text-lg font-[900] text-black text-[24px] mb-3">Propósito</h4>
              <p className="text-sm text-black text-[18px]">
                {' '}
                Suministrar soluciones confiables e innovadoras para el almacenamiento de líquidos en Latinoamérica,
                asegurando la disponibilidad y calidad del líquido para su utilización, promoviendo la sostenibilidad y
                desarrollo responsable en las diferentes industrias que atendemos.
              </p>
            </div>
            <div className="px-4 lg:w-1/4">
              <h4 className="text-lg font-[900] text-black text-[24px] mb-3">Misión</h4>
              <p className="text-sm text-black text-[18px]">
                Satisfacer la demanda de soluciones de almacenamiento de líquidos en Latinoamérica diseñando, fabricando
                e instalando tanques de bajo costo que superen los estándares de durabilidad y eficiencia, de la mano de
                la seguridad, tecnología e ingeniería avanzada, un enfoque centrado en el cliente y la mejora continua.
              </p>
            </div>
            <div className="px-4 lg:w-1/4">
              <h4 className="text-lg font-[900] text-black text-[24px] mb-3">Visión</h4>
              <p className="text-sm text-black text-[18px]">
                Ser líderes en el mercado de Latinoamérica de soluciones tecnológicas para el almacenamiento de
                líquidos, reconocidos por nuestra innovación, calidad y compromiso con la sostenibilidad. Aspiramos a
                ofrecer tanques que no solo cumplan con las necesidades actuales, sino que también anticipen los
                desafíos futuros.
              </p>
            </div>
            <div className="flex-col justify-center hidden px-4 lg:flex lg:w-1/4">
              <img src="/images/video-preview.png" alt="video" className="w-[170px] mb-4 h-[140px]" />
              <p className="text-sm text-black text-[16px] max-w-[200px] mb-3">
                Conoce más en nuestro <br /> video corporativo
              </p>
              <button
                onClick={() => setOpenVideo(!openVideo)}
                className="text-black underline cursor-pointer font-[600] ml-24"
              >
                Ver Video
              </button>
            </div>
          </div>
        </div>
      </div>
      {openVideo && <Video setOpenVideo={setOpenVideo} />}
    </div>
  )
}

export default AboutUs
