import { useState } from 'react'

interface Props {
  children: string
  maxChars?: number
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (children.length < maxChars) return children

  const text = isExpanded ? children : children.substring(0, maxChars) + '...'

  return (
    <div>
      {text}
      <span
        onClick={() => setIsExpanded(!isExpanded)}
        className='text-primary small'
        role='button'
      >
        {' '}
        {isExpanded ? 'Show Less' : 'Show More'}
      </span>
    </div>
  )
}
export default ExpandableText
