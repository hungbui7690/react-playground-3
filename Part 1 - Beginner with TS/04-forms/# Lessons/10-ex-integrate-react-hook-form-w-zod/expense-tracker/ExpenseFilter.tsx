import { categories } from './categories'

interface Props {
  onCategoryChange: (category: string) => void
}

const ExpenseFilter = ({ onCategoryChange }: Props) => {
  return (
    <>
      <h2>Expense List</h2>
      <select
        className='form-select mb-3'
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option key={'all'} value=''>
          All
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  )
}

export default ExpenseFilter
