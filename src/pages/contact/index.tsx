import Button from '@/components/Common/Button'
import Footer from '@/components/Common/Footer'
import SocialMedia from '@/components/Common/SocialMedia'

const ContactPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-slate-200">
        <div className="px-20 pt-12">
          <div className="border-b-2 border-gray-400 border-dashed">
            <h4 className="pt-2 mb-6 text-[83px] font-[900]">CONTACTO</h4>
          </div>
        </div>
        <div className="flex flex-row items-baseline justify-between px-12">
          <div className="w-[40%]">
            <p className="pl-8 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, ipsum soluta. Ea voluptate, magni sit
              voluptatum voluptatem illum accusamus earum quo quisquam obcaecati laudantium fugiat?
            </p>
          </div>
          <div className="w-[40%] p-8 bg-slate-200">
            <h2 className="mb-6 text-xl font-medium">Contáctanos</h2>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Nombre(s)"
                    className="w-full px-4 py-2 border border-black bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Apellido(s)"
                    className="w-full px-4 py-2 border border-black placeholder:text-black bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full px-4 py-2 border border-black placeholder:text-black bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Número de teléfono"
                    className="w-full px-4 py-2 border border-black placeholder:text-black bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="w-1/2">
                  <input
                    type="text"
                    placeholder="Compañía"
                    className="w-full px-4 py-2 border border-black placeholder:text-black bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Asunto"
                  className="w-full px-4 py-2 border border-black placeholder:text-black bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensaje"
                  className="w-full px-4 py-2 border border-black placeholder:text-black bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                ></textarea>
              </div>
              <Button>Enviar</Button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="px-20 pt-12 mx-20">
          <div className="text-3xl text-center max-w-[900px] mx-auto">
            Estamos a su disposición, no dude en contactarnos e iniciamos juntos nuestro siguiente proyecto.
          </div>
        </div>
        <div className="mx-auto mt-8 text-center">
          <div>Carrera 34 # 54-45</div>
          <div>Bogotá, Colombia</div>
          <div>Tel: 204-156-32-23</div>
          <div>Cel: 302-456-8945</div>
          <div>Mail: gerencia@maxxtank.com.co</div>
          <div>Mail: proyectos@maxxtank.com.co</div>
        </div>
      </div>

      <div className="w-full my-12">
        <img src="/public/images/map.png" alt="mapa" />
      </div>

      <div className="mt-6 mb-16 ">
        <SocialMedia />
      </div>

      <Footer />
    </div>
  )
}

export default ContactPage
