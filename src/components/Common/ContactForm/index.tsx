import Button from '@/components/Common/Button'
import { useState } from 'react'

const ContactPage = () => {
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
    <div className="py-10 bg-gray-100">
      <div className="px-10 pt-12 lg:px-20">
        <div className="border-b-2 border-gray-400 border-dashed">
          <h4 className="pt-2 mb-6 text-[40px] lg:text-[83px] font-[900]">CONTACTO</h4>
        </div>
      </div>
      <div className="flex flex-col items-baseline justify-between lg:px-12 lg:flex-row">
        <div className="lg:w-[40%]">
          <p className="pl-8 ">
            Descubra con nosotros el tanque que requiere su proyecto, soluciones de alta ingeniería, calidad, seguridad
            y eficiencia e costos. ¡Contáctenos para una cotización personalizada
          </p>
        </div>
        <div className="lg:w-[40%] p-8 bg-gray-100">
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

export default ContactPage
