import styles from './Button.module.css'

interface Props {
  children?: string
  onClick?: () => void
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info'
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={[styles.btn, styles[`btn-${color}`]].join(' ')}
    >
      {children}
    </button>
  )
}

export default Button
