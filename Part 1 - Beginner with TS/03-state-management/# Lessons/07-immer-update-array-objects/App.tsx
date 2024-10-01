/*
  Simplifying Update Logic with <Immer>
  - https://immerjs.github.io/immer/produce


*/

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import { produce } from 'immer'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Jane', age: 21 },
    { id: 3, name: 'Jim', age: 22 },
  ])

  const handleClick = () => {
    // # Original
    // setStudents(
    //   students.map((student) => ({
    //     ...student,
    //     age: student.name === 'John' ? 99 : student.age,
    //   }))
    // )

    // # Immer: draft is a copy of students array
    setStudents(
      produce(students, (draft) => {
        // Solution 1:
        // const john = draft.find((s) => s.name === 'John')
        // if (john) john.age = 99

        // Solution 2:
        draft.forEach((s) => {
          if (s.name === 'John') s.age = 99
        })
      })
    )
  }

  return (
    <div>
      <ul className='list-group'>
        {students.map((s) => (
          <li className='list-group-item' key={s.id}>
            {s.name} {s.age}
          </li>
        ))}
      </ul>
      <button className='m-2 btn btn-primary' onClick={handleClick}>
        Click
      </button>
    </div>
  )
}

export default App
