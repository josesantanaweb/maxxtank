import Article from "@/components/Apps/article";
import Sidebar from "@/components/Apps/sidebarArticle";
import ProjectsPage from "../proyects";
import Footer from "@/components/Common/Footer";
import "../../styles/style.css"


const ProjectDetailsPage = () => {
    return (
        <div>
            <div className="mx-20 px-12 space-y-4">
                <div>Bogotá 30/04/24</div>
                <h2 className="text-3xl self-center">
                Tanques de almacenamiento de agua para la planta de Coca-Cola en Gachanzipá, Cundinamarca, Colombia.
                </h2>
            </div>
            <div className="w-full my-8 image-sm">
                <img src="/public/images/projects-tank.jpg" alt="" className="h-full  w-full object-cover object-bottom"/>
            </div>
            <div className="flex">
                <div className="w-1/3 p-6">
                <Sidebar/>
                </div>
                <div className="w-full mx-8 p-12">
                <Article/>
                </div>
            </div>

            <ProjectsPage />
            <Footer />


        </div>
    )
}
export default ProjectDetailsPage