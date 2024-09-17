import '@/styles/style.css'

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-20 px-6 py-10 text-xs bg-zinc-800 text-slate-200 flex-col-sm">
      <div className="flex flex-col items-center justify-center gap-2 text-sm">
        <div>Carrera 34 # 54-45</div>
        <div>Bogotá, Cundinamarca</div>
        <div>Tel: +57 321 3721522</div>
        <div>Mail: contacto@maxxtank.com</div>
      </div>
      <div className="flex flex-col gap-2">
        <img src="/images/logo-white.svg" alt="banner" className="w-[160px]" />
      </div>
    </div>
  )
}

export default Footer
