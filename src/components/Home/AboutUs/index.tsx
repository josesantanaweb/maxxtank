const AboutUs = () => {
  return (
    <div>
      <div className="flex justify-center py-10 bg-gray-100">
        <div className="container flex justify-start">
          <h4 className="text-[80px] font-[900] text-black">SOBRE MAXXTANK</h4>
        </div>
      </div>
      <div className="relative h-[1000px] w-full">
        <img src="/images/banner-about-us.png" alt="banner" className="w-full h-full" />
      </div>
      <div className="flex justify-center py-10 bg-gray-100">
        <div className="container">
          <div className="flex justify-center gap-10 mb-14">
            <img src="/images/logo.svg" alt="banner" className="w-[160px]" />
            <h4 className="text-[53px] text-black leading-[60px] font-[600]">
              Ingeniería, tecnología y experiencia para ofrecer soluciones adaptadas a cada proyecto.
            </h4>
          </div>
          <div className="flex items-start justify-between">
            <div className="w-1/4 px-4">
              <h4 className="text-lg font-[900] text-black text-[24px] mb-3">Propósito</h4>
              <p className="text-sm text-black text-[18px]">
                {' '}
                Suministrar soluciones confiables e innovadoras para el almacenamiento de líquidos en Latinoamérica,
                asegurando la disponibilidad y calidad del líquido para su utilización, promoviendo la sostenibilidad y
                desarrollo responsable en las diferentes industrias que atendemos.
              </p>
            </div>
            <div className="w-1/4 px-4">
              <h4 className="text-lg font-[900] text-black text-[24px] mb-3">Misión</h4>
              <p className="text-sm text-black text-[18px]">
                Satisfacer la demanda de soluciones de almacenamiento de líquidos en Latinoamérica diseñando, fabricando
                e instalando tanques de bajo costo que superen los estándares de durabilidad y eficiencia, de la mano de
                la seguridad, tecnología e ingeniería avanzada, un enfoque centrado en el cliente y la mejora continua.
              </p>
            </div>
            <div className="w-1/4 px-4">
              <h4 className="text-lg font-[900] text-black text-[24px] mb-3">Visión</h4>
              <p className="text-sm text-black text-[18px]">
                Ser líderes en el mercado de Latinoamérica de soluciones tecnológicas para el almacenamiento de
                líquidos, reconocidos por nuestra innovación, calidad y compromiso con la sostenibilidad. Aspiramos a
                ofrecer tanques que no solo cumplan con las necesidades actuales, sino que también anticipen los
                desafíos futuros.
              </p>
            </div>
            <div className="flex flex-col justify-center w-1/4 px-4">
              <img src="/images/video-preview.png" alt="video" className="w-[170px] mb-4 h-[140px]" />
              <p className="text-sm text-black text-[16px] max-w-[200px] mb-3">
                Conoce más en nuestro <br /> video corporativo
              </p>
              <a
                href="https://youtu.be/ZswfHNxwZNU"
                target="_blank"
                className="text-black underline cursor-pointer font-[600] ml-24"
              >
                Ver Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
