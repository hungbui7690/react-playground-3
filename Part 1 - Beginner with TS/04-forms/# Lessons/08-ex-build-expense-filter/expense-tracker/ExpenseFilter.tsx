// #
interface Props {
  onCategoryChange: (category: string) => void // similar to setCategory(category: string)
}

const ExpenseFilter = ({ onCategoryChange }: Props) => {
  return (
    <select
      className='form-select mb-3'
      onChange={(e) => onCategoryChange(e.target.value)}
    >
      <option value=''>All Categories</option>
      <option value='Utility'>Utility</option>
      <option value='Grocery'>Grocery</option>
      <option value='Travel'>Travel</option>
    </select>
  )
}

export default ExpenseFilter
