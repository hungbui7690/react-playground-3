/*
  FormSubmission
  Accessing Input Fields


*/

import 'bootstrap/dist/css/bootstrap.css'
import { FormEvent, useRef } from 'react'

function App() {
  const nameRef = useRef<HTMLInputElement>(null) // 1.
  const ageRef = useRef<HTMLInputElement>(null)
  const person = { name: '', age: 0 }

  // FormEvent<HTMLFormElement> -> will be simplified to <FormEvent>
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(nameRef.current?.value) // 3.
    console.log(ageRef.current?.value)

    person.name = nameRef.current?.value || ''
    person.age = Number(ageRef.current?.value) || 0
    console.log(person)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-1'>
        Name
        {/* 2. ref */}
        <input type='text' className='form-control' id='name' ref={nameRef} />
      </div>
      <div className='mb-3'>
        Age
        <input type='number' className='form-control' id='age' ref={ageRef} />
      </div>
      <button type='submit' className='btn btn-primary'>
        {' '}
        Submit
      </button>
    </form>
  )
}

export default App
