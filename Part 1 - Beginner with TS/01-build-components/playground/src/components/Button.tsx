interface Props {
  children?: string
  onClick?: () => void
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button type='button' onClick={onClick} className={'btn btn-' + color}>
      {children}
    </button>
  )
}

export default Button
