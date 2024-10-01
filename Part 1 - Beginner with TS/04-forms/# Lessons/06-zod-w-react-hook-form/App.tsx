/*
  What is Zod and why do we need it?
  - Runtime checks help with getting correctly validated data on the server side. In a case where the user is filling out some kind of form, TypeScript doesn’t know if the user inputs are as good as you expect them to be on the server at runtime.
  - Therefore, Zod helps with data integrity and prevents sending garbage values to the database. Also, it’s better to log an error on the UI itself, such as in cases when a user types in numbers when you expect a string.
  - Zod is a tool that solves this exact problem. It fills this TypeScript blind-spot and helps with type safety during runtime. Zod can help you build a flexible schema design and run it against a form or user input.


\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Schema based Validation with Zod
  - some libraries: 
    # Joi
    # Yup
    # <Zod>

  ~~ npm i @hookform/resolvers
    -> to integrate zod with react-hook-form


****************************

  - create schema from zod to define the shape of the form
  - inter the type of the form from schema
  - integrate zod with react-hook-form by using zodResolver -> this just works with react-hook-form
  - remove react-hook-form validation
    -> {...register('name')}
  - display error message -> message comes from zod -> we can show this message because of the zodResolver
    -> {errors.name?.message}
    -> {error.age?.message}


*/

import 'bootstrap/dist/css/bootstrap.css'
import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod' // 1a.
import { zodResolver } from '@hookform/resolvers/zod' // 2a.

// 1b. form shape
const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  age: z
    .number({ invalid_type_error: 'Age is required' })
    .min(18, { message: 'Age must be at least 18' }),
})

// # we don't need interface when using zod
// interface FormData {
//   name: string
//   age: number
// }

// 1c. with zod, we can use z.infer to get the TS type from the zod schema
type FormData = z.infer<typeof schema>

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // 5a. get isValid
  } = useForm<FormData>({
    resolver: zodResolver(schema), // 2b. zodResolver
  })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form className='m-5 container' onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-1'>
        Name
        <input
          {...register('name')} // 3a. remove react-hook-form validation
          type='text'
          className='form-control'
          id='name'
        />
      </div>

      {/* 3b. errors.name.message is from zod */}
      {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      <p>{errors.name?.type}</p>

      <div className='mb-3'>
        Age
        <input
          {...register('age', { valueAsNumber: true })} // 4a. # valueAsNumber
          type='number'
          className='form-control'
          id='age'
        />
      </div>

      {/* 4b. */}
      {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      <p>{errors.age?.type}</p>

      {/* 5b. disable */}
      <button type='submit' disabled={!isValid} className='btn btn-primary'>
        {' '}
        Submit
      </button>
    </form>
  )
}

export default App
