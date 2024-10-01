/*
  Intro 
  - Backend can be written in:
    # Express.js
    # Django
    # Deno
    # Ruby on Rails
    # Spring
    # ASP.NET
    ...


\\\\\\\\\\\\\\\\\\\\\\\\

  Understand useEffect hook
  - Side Effects: 
    # store data in local storage
    # fetch data from an server
    # manually modify the DOM

  - useEffect hook is used to exec a piece of code <after> a component is rendered


*/

import { useEffect, useRef } from 'react'

function App() {
  const ref = useRef<HTMLInputElement>(null)

  // afterRender
  useEffect(() => {
    // Side Effect
    if (ref.current) ref.current.focus()
  })

  useEffect(() => {
    document.title = 'My'
  })

  return (
    <div>
      <input ref={ref} type='text' className='form-control' />
    </div>
  )
}

export default App
