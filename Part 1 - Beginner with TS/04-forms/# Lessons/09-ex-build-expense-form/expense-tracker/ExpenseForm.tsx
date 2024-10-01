import { useForm } from 'react-hook-form'
import { categories } from './categories'

const ExpenseForm = () => {
  const {
    register,
    formState: { isValid },
  } = useForm()

  return (
    <>
      <h2>Add New Expense</h2>
      <form className='bg-light p-3 border'>
        <div className='mb-1'>
          Description
          <input
            type='text'
            className='form-control'
            {...register('description')}
          />
        </div>
        <div className='mb-2'>
          Amount
          <input
            type='number'
            className='form-control'
            {...register('amount')}
          />
        </div>
        <div className='mb-3'>
          <span>Category</span>
          <select className='form-select' {...register('category')}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button
          type='submit'
          disabled={!isValid}
          className='btn btn-outline-primary'
        >
          {' '}
          Submit
        </button>
      </form>
    </>
  )
}
export default ExpenseForm
