import { useState } from 'react'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'

interface Props {
  onClick: () => void
}

const Like = ({ onClick }: Props) => {
  const [like, setLike] = useState(false)

  const toggleLike = () => {
    setLike(!like)
    onClick()
  }

  if (!like) return <IoIosHeartEmpty size={40} onClick={toggleLike} />

  return <IoIosHeart color='crimson' size={40} onClick={toggleLike} />
}
export default Like
