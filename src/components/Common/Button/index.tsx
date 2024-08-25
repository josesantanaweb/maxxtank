interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center gap-1 px-3 py-2 text-sm text-white rounded-lg bg-gradient-to-r from-primary-100 to-primary-200"
    >
      {children}
    </button>
  )
}

export default Button
