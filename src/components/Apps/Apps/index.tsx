import '@/styles/style.css'
import { ApplicationData } from '../types/types'

interface ApplicationsProps {
  tanksData?: ApplicationData[]
  title?: string
  onClick?: () => void
}

const DATA: ApplicationData[] = [
  {
    image: '01.jpg',
    title: 'Almacenamiento de agua Potable',
    ref: 'almacenamiento',
  },
  {
    image: '02.jpg',
    title: 'Para redes contra incendios',
    ref: 'incendios',
  },
  {
    image: '03.jpg',
    title: 'Para usos industriales',
    ref: 'industriales',
  },
  {
    image: '04.jpg',
    title: 'Para otros usos',
    ref: 'otros',
  },
]

const Applications: React.FC<ApplicationsProps> = ({ tanksData, title, onClick }) => {
  const tanksDataToUse = tanksData || DATA
  return (
    <div className="flex justify-center py-20 bg-white">
      <div className="container">
        <h4 className="mb-20 text-[83px] font-[900] text-black title-sm">{title || 'APLICACIONES'}</h4>
        <div className="grid items-center grid-cols-4 gap-12 grid-col">
          {tanksDataToUse.map((item, index) => (
            <div className="flex flex-col px-10 py-4 bg-gray-100 h-[350px] items-start" key={index}>
              <p className="text-base font-semibold text-black">0{index + 1}</p>
              <img src={`/images/aplicaciones/${item.image}`} alt="app" className="w-full h-[200px] object-cover" />
              <h4 className="text-2xl font-[700] my-2">{item.title}</h4>
              <div className="flex justify-end">
                <span onClick={onClick} className="text-base font-[600] text-black underline cursor-pointer">
                  Ver más
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Applications
