interface Props {
  children?: string // # use string instead of ReactNode
  onClick?: () => void
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
}

// # default value
const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button type='button' onClick={onClick} className={'btn btn-' + color}>
      {children}
    </button>
  )
}

export default Button
