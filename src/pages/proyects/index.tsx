const DATA = [
  {
    image: 'project-01.png',
    date: 'Bogotá 30/04/24',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-02.png',
    date: 'Bogotá 30/04/24',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-03.png',
    date: 'Bogotá 30/04/24',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-04.png',
    date: 'Bogotá 30/04/24',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-01.png',
    date: 'Bogotá 30/04/24',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-02.png',
    date: 'Bogotá 30/04/24',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-03.png',
    date: 'Bogotá 30/04/24',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
  {
    image: 'project-04.png',
    date: 'Bogotá 30/04/24',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ',
  },
]

const ProjectsPage = () => {
  return (
    <main>
      <div className="flex justify-center py-20">
        <div className="container">
          <h4 className="mb-20 text-[83px] font-[900] text-black border-b border-dashed border-black">PROYECTOS</h4>
          <div className="grid items-center grid-cols-4 gap-12">
            {DATA.map((item, index) => (
              <div className="flex flex-col" key={index}>
                <img src={`/images/${item.image}`} alt="app" className="w-full h-[200px] mb-3" />
                <h4 className="mb-3 text-[18px] font-[700]">{item.date}</h4>
                <p className="mb-3 text-[24px] text-black font-[700] leading-[26px]">{item.description}</p>
                <div className="flex justify-start">
                  <a href="" className="text-base font-[700] text-black">
                    Ver mas
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProjectsPage
