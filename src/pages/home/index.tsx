import ContactForm from '@/components/Common/ContactForm'
import Footer from '@/components/Common/Footer'
import AboutUs from '@/components/Home/AboutUs'
import Apps from '@/components/Home/Apps'
import MainBanner from '@/components/Home/MainBanner'
import Projects from '@/components/Home/Projects'
import Tanks from '@/components/Home/Tanks'
import Why from '@/components/Home/Why'

const HomePage = () => {
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
    </main>
  )
}

export default HomePage
