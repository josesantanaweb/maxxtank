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
      <p>hola</p>
      {/* <MainBanner />
      <AboutUs />
      <Why />
      <Apps />
      <Tanks />
      <Projects />
      <ContactForm />
      <Footer />
      {open && (
        <Contact setOpen={setOpen} title="Bienvenido(a) a Maxx Tank, déjenos sus datos y nos pondremos en contacto." />
      )} */}
    </main>
  )
}

export default HomePage
