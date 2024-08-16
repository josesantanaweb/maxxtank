import Article from '@/components/Apps/article'
import Sidebar from '@/components/Apps/sidebarArticle'
import Footer from '@/components/Common/Footer'
import '../../styles/style.css'
import ProjectsPage from '../proyects'

const ProjectDetailsPage = () => {
  return (
    <div>
      <div className="px-12 mx-20 space-y-4">
        <div>Bogotá 30/04/24</div>
        <h2 className="self-center text-3xl">
          Tanques de almacenamiento de agua para la planta de Coca-Cola en Gachanzipá, Cundinamarca, Colombia.
        </h2>
      </div>
      <div className="w-full my-8 image-sm">
        <img src="/images/projects-tank.jpg" alt="" className="object-cover object-bottom w-full h-full" />
      </div>
      <div className="flex flex-col-reverse-sm">
        <div className="w-1/3 p-6 w-full-sm">
          <Sidebar />
        </div>
        <div className="w-full p-12 mx-8 article-m">
          <Article />
        </div>
      </div>

      <ProjectsPage />
      <Footer />
    </div>
  )
}
export default ProjectDetailsPage
