import AboutUs from '@/components/AboutUs'
import Apps from '@/components/Apps'
import Header from '@/components/Common/Header'
import MainBanner from '@/components/MainBanner'
import Projects from '@/components/Projects'
import Tanks from '@/components/Tanks'
import Why from '@/components/Why'

function App() {
  return (
    <div>
      <Header />
      <main>
        <MainBanner />
        <AboutUs />
        <Why />
        <Apps />
        <Tanks />
        <Projects />
      </main>
    </div>
  )
}

export default App
