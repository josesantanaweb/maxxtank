import Advantages from '@/components/Apps/Advantages'
import Apps from '@/components/Apps/Apps'
import Storage from '@/components/Apps/Storage'
import StorageNetwork from '@/components/Apps/StorageNetwork'
import Tanks from '@/components/Apps/Tanks'

const AppsPage = () => {
  return (
    <main>
      <Apps />
      <Storage />
      <Tanks />
      <Advantages />
      <StorageNetwork />
    </main>
  )
}

export default AppsPage
