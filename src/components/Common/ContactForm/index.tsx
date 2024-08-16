import Button from '@/components/Common/Button'

const ContactPage = () => {
  return (
    <div className="py-10 bg-gray-100">
      <div className="px-20 pt-12">
        <div className="border-b-2 border-gray-400 border-dashed">
          <h4 className="pt-2 mb-6 text-[83px] font-[900]">CONTACTO</h4>
        </div>
      </div>
      <div className="flex flex-row items-baseline justify-between px-12">
        <div className="w-[40%]">
          <p className="pl-8 ">
            En sus proyectos Maxxtank desea ser su aliado, ofreciéndole una solución ajustada a su necesidad, lo cual
            lograremos con nuestro equipo de expertos.
          </p>
        </div>
        <div className="w-[40%] p-8 bg-gray-100">
          <h2 className="mb-6 text-xl font-medium">Contáctanos</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Nombre(s)"
                  className="w-full px-4 py-2 bg-gray-100 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Apellido(s)"
                  className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Número de teléfono"
                  className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  placeholder="Compañía"
                  className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Asunto"
                className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Mensaje"
                className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
              ></textarea>
            </div>
            <Button>Enviar</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
