import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Common/Footer'

const ContactPage = () => {
  return (
    <div>
      <ContactForm />

      <div className="flex flex-col py-12">
        <div className="px-20 mx-20">
          <div className="flex justify-center gap-10 mb-14">
            <img src="/images/logo.svg" alt="banner" className="w-[160px]" />
            <h4 className="text-[48px] text-black leading-[60px] font-[600]">
              Estamos a su disposición, no dude en contactarnos e iniciamos juntos nuestro siguiente proyecto.
            </h4>
          </div>
        </div>
        {/* <div className="mx-auto mt-8 text-center">
          <div>Carrera 34 # 54-45</div>
          <div>Bogotá, Cundinamarca</div>
          <div>Tel: +57 321 3721522</div>
          <div>Mail: contacto@maxxtank.com</div>
        </div> */}
      </div>

      {/* <div className="w-full my-12">
        <img src="/images/map.png" alt="mapa" />
      </div> */}

      {/* <div className="mt-6 mb-16 ">
        <SocialMedia />
      </div> */}

      <Footer />
    </div>
  )
}

export default ContactPage
