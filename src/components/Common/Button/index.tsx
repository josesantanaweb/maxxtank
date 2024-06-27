interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="flex items-center justify-center gap-1 px-6 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-primary-100 to-primary-200">
      {children}
    </button>
  )
}

export default Button
