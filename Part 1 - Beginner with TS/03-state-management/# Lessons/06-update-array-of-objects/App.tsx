/*
  Updating Array of Objects


*/

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  const [students, setStudents] = useState([
    { name: 'John', age: 20 },
    { name: 'Jane', age: 21 },
    { name: 'Jim', age: 22 },
  ])

  const handleClick = () => {
    // #
    setStudents(
      students.map((student) => ({
        ...student,
        age: student.name === 'John' ? 99 : student.age,
      }))
    )
  }

  return (
    <div>
      <button className='m-2 btn btn-primary' onClick={handleClick}>
        Click
      </button>
      <br />
      {students.map((student) => (
        <>
          <span className='bg-danger m-2 badge' key={student.name}>
            {student.name} {student.age}
          </span>
          <br />
        </>
      ))}
    </div>
  )
}

export default App
