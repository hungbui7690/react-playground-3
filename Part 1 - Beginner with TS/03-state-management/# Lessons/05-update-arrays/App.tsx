/*
  Updating Arrays


*/

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3'])

  const handleClick = () => {
    // # add new tag
    // setTags([...tags, 'tag4'])

    // # remove last tag
    // setTags(tags.slice(0, -1))

    // # remove tag
    // setTags(tags.filter((tag) => tag !== 'tag1'))

    // # update tag
    setTags(tags.map((tag) => (tag === 'tag2' ? 'tagX' : tag)))
  }

  return (
    <div>
      <button className='m-2 btn btn-primary' onClick={handleClick}>
        Click
      </button>
      <br />
      {tags.map((tag) => (
        <>
          <span className='bg-danger m-2 badge' key={tag}>
            {tag}
          </span>
          <br />
        </>
      ))}
    </div>
  )
}

export default App
