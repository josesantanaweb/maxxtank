import { ApplicationData } from "../types/types";
import "@/styles/style.css"

interface ApplicationsProps {
  tanksData?: ApplicationData[];
  title? : string
}


const DATA: ApplicationData[] = [
  {
    image: 'apps-tank.png',
    title: 'Almacenamiento de agua Potable',
  },
  {
    image: 'apps-tank.png',
    title: 'Para redescontra incendio',
  },
  {
    image: 'apps-tank.png',
    title: 'Para usos industriales',
  },
  {
    image: 'apps-tank.png',
    title: 'Para otros usos',
  },
]

const Applications: React.FC<ApplicationsProps> = ({ tanksData , title}) => {
  const tanksDataToUse = tanksData || DATA;
  return (
    <div className="flex justify-center py-20 bg-white">
      <div className="container">
        <h4 className="mb-20 text-[83px] font-[900] text-black title-sm">{title || 'APLICACIONES'}</h4>
        <div className="grid items-center grid-cols-4 gap-12 grid-col">
          {tanksDataToUse.map((item, index) => (
            <div className="flex flex-col px-10 py-4 bg-gray-100 h-[350px]" key={index}>
              <p className="mb-3 text-base text-black">0{index + 1}</p>
              <img src={`/images/${item.image}`} alt="app" className="w-full h-[200px] mb-3 object-contain" />
              <h4 className="mb-3 text-2xl font-[700]">{item.title}</h4>
              <div className="flex justify-end">
                <a href="" className="text-base font-[600] text-black underline">
                  Ver mas
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Applications
