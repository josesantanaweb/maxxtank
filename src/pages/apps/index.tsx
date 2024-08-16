import Advantages from '@/components/Apps/Advantages'
import Apps from '@/components/Apps/Apps'
import Components from '@/components/Apps/Components'
import Diameters from '@/components/Apps/Diameters'
import Storage from '@/components/Apps/Storage'
import StorageNetwork from '@/components/Apps/StorageNetwork'
import Footer from '@/components/Common/Footer'

const AppsPage = () => {
  return (
    <main>
      <Apps />
      <Storage />
      <Components />
      {/* <Tanks /> */}
      <Diameters />
      <Advantages />
      <StorageNetwork />
      <Components />
      <Diameters />
      <Advantages />
      <Footer />
    </main>
  )
}

export default AppsPage
