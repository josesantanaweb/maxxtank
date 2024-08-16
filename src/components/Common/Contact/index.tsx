import Button from '@/components/Common/Button'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Contact = ({ setOpen }: any) => {
  return (
    <div className="fixed top-0 z-10 flex items-center justify-center w-full h-full">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35" onClick={() => setOpen(false)}></div>
      <div className="flex bg-gray-100 rounded-xl w-[600px] relative z-10 py-6 flex-col">
        <div className="flex justify-end w-full px-5">
          <span onClick={() => setOpen(false)} className="text-2xl cursor-pointer">
            <AiOutlineCloseCircle />
          </span>
        </div>
        <div className="w-full p-8 ">
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

export default Contact
