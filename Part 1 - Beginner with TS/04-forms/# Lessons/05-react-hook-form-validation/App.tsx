/*
  Applying Validation
  - NOT: {...register('age', { required: true, min: 18, max: 99 })}
  - DO:  {...register('age'), { required: true, min: 18, max: 99 }}


*/

import 'bootstrap/dist/css/bootstrap.css'
import { FieldValues, useForm } from 'react-hook-form'

// # define the shape of the form
interface FormData {
  name: string
  age: number
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>() // # shape of the form + get the "errors"

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  // console.log(errors) // #

  return (
    <form className='m-5 container' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-1'>
        Name
        <input
          {...register('name', { required: true, minLength: 3 })} // #
          type='text'
          className='form-control'
          id='name'
        />
      </div>
      {/* # */}
      {errors.name && errors.name.type === 'required' && (
        <p className='text-danger'>Name is required</p>
      )}
      {errors.name && errors.name.type === 'minLength' && (
        <p className='text-danger'>Name must be at least 3 characters</p>
      )}

      <div className='mb-3'>
        Age
        <input
          {...register('age', { required: true, min: 18, max: 99 })} // #
          type='number'
          className='form-control'
          id='age'
        />
      </div>
      {/* # */}
      {errors.age && errors.age.type === 'required' && (
        <p className='text-danger'>Age is required</p>
      )}
      {errors.age && errors.age.type === 'min' && (
        <p className='text-danger'>Age must be at least 18</p>
      )}
      {errors.age && errors.age.type === 'max' && (
        <p className='text-danger'>Age must be at most 99</p>
      )}

      <button type='submit' className='btn btn-primary'>
        {' '}
        Submit
      </button>
    </form>
  )
}

export default App
