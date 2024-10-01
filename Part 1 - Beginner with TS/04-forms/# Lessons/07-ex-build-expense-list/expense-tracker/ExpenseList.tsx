interface Expense {
  id: number
  description: string
  amount: number
  category: string
}

interface Props {
  expenses: Expense[]
  onDelete: (id: number) => void
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <>
      <h2>Expense List</h2>
      {expenses.length === 0 && <p>No expenses</p>}
      {expenses.length > 0 && (
        <table className='table table-striped'>
          <thead>
            <tr>
              <th scope='col'>Description</th>
              <th scope='col'>Amount</th>
              <th scope='col'>Category</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {expenses.length > 0 &&
              expenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.description}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => onDelete(expense.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <td colSpan={3}>
                $
                {expenses
                  .reduce((acc, expense) => acc + expense.amount, 0)
                  .toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </>
  )
}

export default ExpenseList
