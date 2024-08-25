import Advantages from '@/components/Apps/Advantages'
import Apps from '@/components/Apps/Apps'
import Components from '@/components/Apps/Components'
import Storage from '@/components/Apps/Storage'
import StorageNetwork from '@/components/Apps/StorageNetwork'
import Footer from '@/components/Common/Footer'
import { useRef } from 'react'

const AppsPage = () => {
  const potableRef = useRef<HTMLElement | null>(null)

  const handleScroll = () => {
    potableRef?.current?.scrollIntoView({ behavior: 'smooth' })
    console.log('potableRef', potableRef)
  }

  return (
    <main>
      <Apps onClick={handleScroll} />
      <Storage ref={potableRef} />
      <Components />
      {/* <Tanks /> */}
      {/* <Diameters /> */}
      <Advantages />
      <StorageNetwork />
      <Components />
      {/* <Diameters /> */}
      <Advantages />
      <Footer />
    </main>
  )
}

export default AppsPage
