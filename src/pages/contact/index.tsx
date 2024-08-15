import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Common/Footer'
import SocialMedia from '@/components/Common/SocialMedia'

const ContactPage = () => {
  return (
    <div>
      <ContactForm />

      <div className="flex flex-col">
        <div className="px-20 pt-12 mx-20">
          <div className="text-3xl text-center max-w-[900px] mx-auto">
            Estamos a su disposición, no dude en contactarnos e iniciamos juntos nuestro siguiente proyecto.
          </div>
        </div>
        <div className="mx-auto mt-8 text-center">
          <div>Carrera 34 # 54-45</div>
          <div>Bogotá, Cundinamarca</div>
          <div>Tel: +57 321 3721522</div>
          <div>Mail: contacto@maxxtank.com</div>
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
