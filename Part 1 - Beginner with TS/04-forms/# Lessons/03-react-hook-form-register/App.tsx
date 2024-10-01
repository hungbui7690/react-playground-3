/*
  Managing Forms with React Hook Form
  ~~ npm i react-hook-form

  - useForm -> form -> register
  - register('name')
    # name: "name"
    # onBlur
    # onChange
    # ref


*/

import 'bootstrap/dist/css/bootstrap.css'
import { useForm } from 'react-hook-form' // #

function App() {
  const { register } = useForm() // #

  return (
    <form className='m-5 container'>
      <div className='mb-1'>
        Name
        <input
          type='text'
          className='form-control'
          id='name'
          {...register('name')} // # spread register here
        />
      </div>
      <div className='mb-3'>
        Age
        <input
          type='number'
          className='form-control'
          id='age'
          {...register('age')} // #
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
