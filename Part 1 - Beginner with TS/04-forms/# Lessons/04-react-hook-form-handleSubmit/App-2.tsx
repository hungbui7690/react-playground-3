/*
  Managing Forms with React Hook Form


*/

import 'bootstrap/dist/css/bootstrap.css'
import { FieldValues, useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit } = useForm()

  // #
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    // # NOT onSubmit={onSubmit} -> BUT onSubmit={handleSubmit(onSubmit)}
    <form className='m-5 container' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-1'>
        Name
        <input
          type='text'
          className='form-control'
          id='name'
          {...register('name')}
        />
      </div>
      <div className='mb-3'>
        Age
        <input
          type='number'
          className='form-control'
          id='age'
          {...register('age')}
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
