/*
  Controlled Components
  - Input Fields are <not> controlled by the DOM, but they are controlled by the component states
  - value={person.name} -> the field has singe source of truth, which is the component state


*/

import 'bootstrap/dist/css/bootstrap.css'
import { FormEvent, useState } from 'react'

function App() {
  const [person, setPerson] = useState({ name: '', age: 0 }) // #

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(person)
  }

  return (
    <form onSubmit={handleSubmit} className='m-5 container'>
      <div className='mb-1'>
        Name
        <input
          type='text'
          className='form-control'
          id='name'
          value={person.name} // # singe source of truth
          onChange={(e) => setPerson({ ...person, name: e.target.value })}
        />
      </div>
      <div className='mb-3'>
        Age
        <input
          type='number'
          className='form-control'
          id='age'
          value={person.age} // #
          onChange={(e) =>
            setPerson({ ...person, age: Number(e.target.value) })
          }
        />
      </div>
      <button type='submit' className='btn btn-primary'>
        {' '}
        Submit
      </button>
    </form>
  )
}

export default App
