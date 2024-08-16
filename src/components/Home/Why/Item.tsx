import { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'

const Item = ({ item }: any) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <div
      className={`grid items-center overflow-hidden justify-between grid-cols-3 px-10 border-t border-gray-400 last:border-b transition-all ${
        open ? 'h-full py-6' : 'h-12'
      }`}
    >
      <h4 className="text-lg font-[900]">{item.title}</h4>
      <p className={`block text-[16px] transition-all ${open ? '' : 'truncate'}`}>{item.description}</p>
      <span className="flex justify-end cursor-pointer" onClick={handleOpen}>
        <IoIosAdd size={28} />
      </span>
    </div>
  )
}

export default Item
