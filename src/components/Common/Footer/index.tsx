import "@/styles/style.css"

const Footer = () => {
  return (
    <div className="flex flex-row px-6 text-xs bg-zinc-800 text-slate-200 flex-col-sm">
      <div
        className="flex items-center my-8 ml-8 border-r-2 border-gray-400 border-dashed "
        style={{ flex: '3 0 25%' }}
      >
        <p className="mr-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, molestias! Nobis ab provident
          exercitationem iure.
        </p>
      </div>
      <div className="flex items-center flex-col-sm">
        <div className="my-8 ml-6" style={{ flex: '1 0 30% ' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, esse? Nulla minima veritatis quidem
            ipsum quod?
          </p>
        </div>

        <div className="w-20 mx-2 " style={{ margin: '0 20px' }}>
          <img src="/public/icons/bands.png" alt="" className="w-full" />
        </div>
        <div className="my-8 mr-6 " style={{ flex: '1 0 30%', textAlign: 'end' }}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, esse? Nulla minima veritatis quidem
            ipsum quod?
          </p>
        </div>
      </div>
      <div className="flex items-center my-8 mr-6 border-l-2 border-gray-400 border-dashed" style={{ flex: '3 0 25%' }}>
        <p className="ml-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, maxime magni, vel voluptatum numquam quae
          minus, dicta ea deleniti repellendus laborum vero.
        </p>
      </div>
    </div>
  )
}

export default Footer
