import AboutUs from '@/components/AboutUs'
import Apps from '@/components/Apps'
import Header from '@/components/Common/Header'
import MainBanner from '@/components/MainBanner'
import Projects from '@/components/Projects'
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
        <Projects />
      </main>
    </div>
  )
}

export default App
