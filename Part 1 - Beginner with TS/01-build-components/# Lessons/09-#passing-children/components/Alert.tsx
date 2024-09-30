interface Props {
  children?: React.ReactNode // #
}

// #
const Alert = ({ children }: Props) => {
  return (
    <div className='alert alert-primary' role='alert'>
      {/* # */}
      {children}
    </div>
  )
}
export default Alert
