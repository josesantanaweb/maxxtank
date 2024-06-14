import AboutUs from '@/components/AboutUs'
import Apps from '@/components/Apps'
import Header from '@/components/Common/Header'
import MainBanner from '@/components/MainBanner'
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
      </main>
    </div>
  )
}

export default App
