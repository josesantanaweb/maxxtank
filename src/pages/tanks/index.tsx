import Apps from '@/components/Apps/Apps'
import Button from '@/components/Common/Button'
import Footer from '@/components/Common/Footer'
import GalleryImage from '@/components/Common/GalleryImage'
import '../../styles/style.css'

import { ApplicationData, GalleryImageData } from '@/components/Apps/types/types'

const DATA: ApplicationData[] = [
  {
    image: 'tank-render.png',
    title: 'Diseño e ingenieria',
  },
  {
    image: 'build-tank.jpg',
    title: 'Proceso de armado',
  },
  {
    image: 'panel-tank.png',
    title: 'Paneles',
  },
  {
    image: 'waterproofing-tank.jpg',
    title: 'impermeabilizacion',
  },
]

const DataImageGalleryTanks: GalleryImageData[] = [
  { image: 'building-01.png', alt: '' },
  { image: 'building-02.png', alt: '' },
  { image: 'building-03.png', alt: '' },
  { image: 'building-04.png', alt: '' },
]

const TankPage: React.FC = () => {
  return (
    <div>
      <Apps tanksData={DATA} title="TANQUES" />

      <div>
        <div>
          <div className="flex justify-center px-12 py-20 bg-zinc-800">
            <div className="container flex flex-col justify-start">
              <h4 className="w-1/3 mt-10 mb-10 text-6xl text-white">Diseño e ingenieria</h4>
              <div className="grid items-start grid-cols-3 gap-10 grid-col">
                <ul className="pt-12">
                  <li className="py-3 text-xl text-white border-b border-dashed ">Adaptabilidad</li>
                  <li className="py-3 text-xl text-white border-b border-dashed ">Ahorro de materiales</li>
                  <li className="py-3 text-xl text-white border-b border-dashed ">Precision</li>
                </ul>
                <div className="relative flex flex-col items-center">
                  <img src="/images/abstract-figure.svg" alt="" className="absolute w-24 -top-40 none-sm" />
                  <img src="/images/tank-render.png" alt="" />
                  <h4 className="mt-8 mb-5 text-4xl text-center text-white">Diseño e ingenieria hecho a la medida</h4>
                </div>
                <div className="flex flex-col pt-12 space-y-6">
                  <h4 className="text-2xl text-white">Precision y eficiencia</h4>
                  <div className="space-y-6">
                    <p className="text-white">
                      Desarrollamos ingenierías con softwares especializados, adaptando el diseño a las necesaidades
                      específicas de cada proyecto.
                    </p>
                    <p className="text-white">
                      Gracias a nuestro análisis y simulación de resistencia y comportamiento de materiales, estamos en
                      la capacidad de desarrollar proyectos de ingeniería desde cero, con un mínimo márgen de error,
                      garantizando la máxima eficiencia de recursos y tiempos de ejecución.{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-8 my-20 text-5xl ">PROCESO DE ARMADO</div>
      <div className="w-4/5 h-screen mx-auto my-16 h-sm">
        <GalleryImage images={DataImageGalleryTanks} />
      </div>
      <div>
        <div className="mx-8 text-3xl">
          Tanques modulares pernados con redescubrimiento para almacenamiento de agua y otros liquidos
        </div>
      </div>
      <div className="flex justify-center my-8 space-x-16 flex-col-sm div-sm">
        <div className="flex space-x-12 div-sm">
          <div className="pr-12 border-r-2 border-gray-400 border-dashed div-sm">Translado</div>
          <div className="pr-12 border-r-2 border-gray-400 border-dashed div-sm">Encofrado</div>
          <div className="pr-16 border-r-2 border-gray-400 border-dashed div-sm">Ensamble</div>
        </div>
        <div className="flex space-x-12 div-sm">
          <div className="div-sm">Impermeabilizacion</div>
          <div className="pl-12 border-l-2 border-gray-400 border-dashed div-sm">Acabado</div>
          <div className="pl-12 border-l-2 border-gray-400 border-dashed div-sm">Prueba</div>
        </div>
      </div>
      <div className="w-4/5 mx-auto my-20 space-y-6 text-center">
        <div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
          vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla
          facilisi.
        </div>
        <div>
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
          minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
        </div>
      </div>

      <div className="flex justify-center p-16 bg-gray-300 flex-col-sm">
        <div className="container flex flex-col justify-start w-1/4 w-full-sm">
          <h4 className="mb-16 text-5xl font-bold title-sm">PANELES</h4>
          <div className="flex flex-col">
            <div className="py-6 text-sm border-b-2 border-black border-dashed">
              Lámina: Acero galvanizado continuo por inmersión en caliente, bajo norma ASTM A653, recubrimiento G-90 en
              calibre 12 (1er Nivel) 14 (2do y 3er Nivel) 16 (4to y 5to Nivel).
            </div>
            <div className="py-6 text-sm border-b-2 border-black border-dashed">
              Fabricamos los tanques a partir del exclusivo Panel R8V, con Recubrimiento ProteCoat, altamente resistente
              a la corrosión y especialmente diseñado para proporcionar una zona plana en la unión pernada, mejorando la
              integridad estructural del tanque y proveyendo una apariencia agradable y larga vida útil.
            </div>
          </div>
          <div className="flex flex-col flex-wrap items-center content-end mt-10">
            <a href="#" className="underline">
              Ficha Tecnica
            </a>
            <div>
              <Button>Descargar</Button>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col items-center w-1/2 mx-6 w-full-sm">
          <img src="/icons/line-dashed.png" alt="" className="none-sm" />
          <img src="/images/panel-tank.png" alt="" className="w-full-sm" />
          <h4 className="mt-20 text-5xl text-center title-xs">Exclusivo panel R8V con recubrimiento PROTECOAT</h4>
        </div>
        <div className="container flex flex-col justify-start w-1/4 pt-12 w-full-sm">
          <h4 className="mb-16 text-5xl font-bold title-xs">Estructura Rolada</h4>
          <div className="flex flex-col">
            <div className="py-6 text-sm">
              El material deberá ser conforme con los estándares mínimos ASTM A36 ó ANSI 1010.
            </div>
            <div className="py-6 text-sm">
              Los requisitos de diseño para el acero de resistencia media deberán ser ASTM A36 ó ASTM A1011 Grado 30,
              36, 40 ó 50, con una resistencia permitida de tensión máxima de 124 MPa (18.000 psi)
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-16 mt-8 ">
        <div className="mt-12">
          <div className="text-5xl title-xs">Impermeabilizacion</div>
        </div>
        <div className="flex mt-16 flex-arrow flex-col-sm">
          <div className="w-2/5 mr-12 w-full-sm">
            <GalleryImage images={DataImageGalleryTanks} />
          </div>
          <div className="w-3/5 mx-12 w-full-sm div-sm">
            <div className="mb-8 text-4xl text-end title-xs text-start-sm">Membranas Impermeabilizantes</div>
            <div className="space-y-6">
              <div>
                Es un producto fabricado a base de películas de P.V.C, diseñado en su interior con refuerzo en tela de
                poliéster de alta tenacidad que le confieren buenas propiedades mecánicas y alta estabilidad
                dimensional.
              </div>
              <div>
                Manufacturados por un sistema de gestión integral que cumple con los requisitos de norma de calidad ISO
                9001:2015; norma ambiental ISO 14001:2015 y norma de seguridad BASC: 2012.
              </div>
              <div>
                *Elaborada con materias primas admitidas por la FDA (Food and Drug Administration) para estar en
                contacto con alimentos y agua potable.
              </div>
            </div>
            <div className="mt-10 text-2xl">
              Excelente resistencia a la tensión, alta lexibilidad y estabilidad dimensional.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default TankPage
