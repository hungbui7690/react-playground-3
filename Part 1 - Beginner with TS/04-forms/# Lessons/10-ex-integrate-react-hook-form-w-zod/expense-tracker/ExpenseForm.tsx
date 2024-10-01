import { FieldValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { categories } from './categories'

// #
const schema = z.object({
  description: z.string().min(3).max(50),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .min(0.01)
    .max(10000),
  category: z.enum(categories), // # enum must be constants -> catagories must be asserted as const
})

type Expense = z.infer<typeof schema>

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Expense>({ resolver: zodResolver(schema) }) // #

  const onSubmit = (data: FieldValues) => console.log(data)

  return (
    <>
      <h2>Add New Expense</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='bg-light p-3 border'>
        <div className='mb-1'>
          Description
          <input
            type='text'
            className='form-control'
            {...register('description')}
          />
          {/* # */}
          {errors.description && (
            <p className='text-danger'>{errors.description.message}</p>
          )}
        </div>

        <div className='mb-2'>
          Amount
          <input
            type='number'
            className='form-control'
            {...register('amount', { valueAsNumber: true })} // #
          />
        </div>
        {/* # */}
        {errors.amount && (
          <p className='text-danger'>{errors.amount.message}</p>
        )}

        <div className='mb-3'>
          <span>Category</span>
          <select className='form-select' {...register('category')}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {/* # */}
          {errors.category && (
            <p className='text-danger'>{errors.category.message}</p>
          )}
        </div>
        <button type='submit' className='btn btn-outline-primary'>
          {' '}
          Submit
        </button>
      </form>
    </>
  )
}
export default ExpenseForm
