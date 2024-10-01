/*
  Updating Nested Objects
  - setCustomer({
      ...customer,
      address: { ...customer.address, city: 'San Francisco' },
    })
    -> ...customer: copy all properties of customer
    -> address: { ...customer.address, city: 'San Francisco' }: copy all properties of customer.address, then update city



*/

import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'New York',
      state: 'NY',
    },
  })

  const handleClick = () => {
    // #
    setCustomer({
      ...customer,
      address: { ...customer.address, city: 'San Francisco' },
    })
  }

  return (
    <div>
      <button className='m-2 btn btn-primary' onClick={handleClick}>
        Click
      </button>
      {customer.name + ' lives in ' + customer.address.city}
    </div>
  )
}

export default App
