import Apps from '@/components/Apps/Apps'
import Tanks from '@/components/Home/Tanks'
import GalleryImage from '@/components/Common/GalleryImage'
import Button from '@/components/Common/Button'
import Footer from '@/components/Common/Footer'


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
  { image: 'building-02.jpg', alt: '' },
  { image: 'building-03.jpg', alt: '' },
  { image: 'building-04.jpg', alt: '' },
]

const TankPage: React.FC = () => {
  return (
    <div>
      <Apps tanksData={DATA} />

      <Tanks />
      <div className=" text-5xl my-20 mx-8">PROCESO DE ARMADO</div>
      <div>
        <GalleryImage images={DataImageGalleryTanks} />
      </div>
      <div>
        <div className="text-3xl mx-8 my-12">
          Tanques modulares pernados con redescubrimiento para almacenamiento de agua y otros liquidos
        </div>
      </div>
      <div className="flex space-x-32 justify-center my-8">
        <div className="flex space-x-28">
          <div>Translado</div>
          <div>Encofrado</div>
          <div>Ensamble</div>
        </div>
        <div className="flex space-x-28">
          <div>Impermeabilizacion</div>
          <div>Acabado</div>
          <div>Prueba</div>
        </div>
      </div>
      <div className="text-center mx-auto my-20 space-y-6 w-4/5">
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

      <div className="flex justify-center p-16 bg-gray-300">
        <div className="container flex flex-col justify-start w-1/4">
          <h4 className="mb-16 text-5xl font-bold">PANELES</h4>
          <div className="flex flex-col">
            <div className="py-6  border-b-2 border-dashed border-black text-sm">
              Lámina: Acero galvanizado continuo por inmersión en caliente, bajo norma ASTM A653, recubrimiento G-90 en
              calibre 12 (1er Nivel) 14 (2do y 3er Nivel) 16 (4to y 5to Nivel).
            </div>
            <div className="py-6 border-b-2 border-dashed border-black text-sm">
              Fabricamos los tanques a partir del exclusivo Panel R8V, con Recubrimiento ProteCoat, altamente resistente
              a la corrosión y especialmente diseñado para proporcionar una zona plana en la unión pernada, mejorando la
              integridad estructural del tanque y proveyendo una apariencia agradable y larga vida útil.
            </div>
          </div>
          <div className="mt-10 flex flex-col content-end items-center flex-wrap">
            <a href="#" className="underline">
              Ficha Tecnica
            </a>
            <div>
              <Button>Descargar</Button>
            </div>
          </div>
        </div>

        <div className=" w-1/2 relative flex flex-col items-center mx-6">
          <img src="/icons/line-dashed.png" alt="" />
          <img src="/images/panel-tank.png" alt="" />
          <h4 className="text-5xl text-center mt-20">Exclusivo panel R8V con recubrimiento PROTECOAT</h4>
        </div>
        <div className="container flex flex-col justify-start  w-1/4 pt-12 ">
          <h4 className="mb-16 text-5xl font-bold">Estructura Rolada</h4>
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
      <div className=" p-16 flex flex-col mt-8">
        <div className="mt-12">
          <div className="text-5xl">Impermeabilizacion</div>
        </div>
        <div className="flex flex-arrow mt-16">
          <div className="bg-black h-4/5 w-4/5">

          </div>
          <div className='w-1/2 space-x-4'>
            <div className="text-3xl mb-8">Membranas Impermeabilizantes</div>
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
            <div className='mt-10 text-2xl'>
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
