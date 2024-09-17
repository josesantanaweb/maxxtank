import Contact from '@/components/Common/Contact'
import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Common/Footer'
import AboutUs from '@/components/Home/AboutUs'
import Apps from '@/components/Home/Apps'
import MainBanner from '@/components/Home/MainBanner'
import Projects from '@/components/Home/Projects'
import Tanks from '@/components/Home/Tanks'
import Why from '@/components/Home/Why'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 5000)
  }, [])

  return (
    <main>
      <MainBanner />
      <AboutUs />
      <Why />
      <Apps />
      <Tanks />
      <Projects />
      <ContactForm />
      <Footer />
      {open && (
        <Contact setOpen={setOpen} title="Bienvenido(a) a Maxx Tank, déjenos sus datos y nos pondremos en contacto." />
      )}
    </main>
  )
}

export default HomePage
