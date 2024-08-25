import Button from '@/components/Common/Button'
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const Contact = ({ setOpen, title }: any) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const mailto = `mailto:contacto@maxxtank.com?cc=${encodeURIComponent(email)}&subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}%0ANombre%3A ${encodeURIComponent(firstName)} ${encodeURIComponent(
    lastName
  )}%0ACompania%3A ${encodeURIComponent(company)}%0ATel%C3%A9fono%3A ${encodeURIComponent(phone)}`

  return (
    <div className="fixed top-0 z-10 flex items-center justify-center w-full h-full">
      <a href="mailto:email@example.com?subject=Asunto&body=Mensaje%20del%20cuerpo%20del%20correo%20electr%C3%B3nico%0ATel%C3%A9fono%3A%201234567890">
        Enviar correo
      </a>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-35" onClick={() => setOpen(false)}></div>
      <div className="flex bg-gray-100 rounded-xl w-[600px] relative z-10 py-6 flex-col">
        <div className="flex justify-end w-full px-5">
          <span onClick={() => setOpen(false)} className="text-2xl cursor-pointer">
            <AiOutlineCloseCircle />
          </span>
        </div>
        <div className="w-full p-8">
          {title && title !== '' && <h5 className="mb-5 text-xl text-black">{title}</h5>}
          <h2 className="mb-6 text-xl font-medium">Contáctanos</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Nombre(s)"
                  className="w-full px-4 py-2 bg-gray-100 border border-black focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-black"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Apellido(s)"
                  className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo electrónico"
                className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Número de teléfono"
                  className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Compañía"
                  className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Asunto"
                className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Mensaje"
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 bg-gray-100 border border-black placeholder:text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows={4}
              ></textarea>
            </div>
            <a href={mailto}>
              <Button>Enviar</Button>
            </a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
