import { useState } from 'react'
import { IoIosAdd, IoIosRemove } from 'react-icons/io'

const Item = ({ item }: any) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <div
      className={`grid items-center lg:overflow-hidden justify-between grid-cols-1 lg:grid-cols-3 py-5 lg:py-0 px-10 border-t border-gray-400 last:border-b transition-all ${
        open ? 'h-full py-6' : 'h-auto lg:h-12'
      }`}
    >
      <h4 className="text-lg font-[900]">{item.title}</h4>
      <p className={`block text-[16px] transition-all ${open ? '' : 'lg:truncate'}`}>{item.description}</p>
      <span className="justify-end hidden cursor-pointer lg:flex" onClick={handleOpen}>
        {open ? <IoIosRemove size={28} /> : <IoIosAdd size={28} />}
      </span>
    </div>
  )
}

export default Item
