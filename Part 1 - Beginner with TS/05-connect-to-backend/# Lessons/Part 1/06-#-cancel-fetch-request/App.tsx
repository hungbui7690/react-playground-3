/*
  Scenarios
  - https://medium.com/@icjoseph/using-react-to-understand-abort-controllers-eb10654485df
  - Normally you fetch data and when it resolves you set some state with the response. However, there’s two situations to consider:
    -> The component querying for this data in unmounted from the DOM.
    -> The data is not relevant anymore.

  - Example: The latter can happen for example if you are fetching friends of a user Joe, but Joe has too many friends so the request is slow. Before the request for Joe‘s friends resolves, you decide you want to see Jane‘s friends instead, but she has fewer friends so her request goes way faster and you show her friends list almost immediately, but then Joe‘s request resolves and overrides the friends list. In this case you would have wanted to cancel the first request.
  
  - There’s many techniques to do this, for example, for unmounted components, use a ref on a DOM element, and check if ref.current is not null when the response comes back, or the less preferred way of having an "is-mounted” ref flag.
  - For irrelevant data you could use a variable, which both your request and the effect cleanup have closure over, so when clean up happens you set this variable to a value, and inside your promise chain you check for this value.

  - Another Example: If you have some expensive calls to your server the AbortController can really help to minimize server load. Why should you let an stale request run? Also what if your request would update state with stale data because your user is clicking through some filter options or something? I would say AbortController is perfect for this type of scenarios.


\\\\\\\\\\\\\\\\\\\\\\\\\\\

  Cancelling a Fetch Request
  - if user navigate away from the page and then come back, react still fetches data from the server again
  - use AbortController to cancel that request
    -> check Network tab


*/

import { useEffect, useState } from 'react'
import axios, { AxiosError, CanceledError } from 'axios'

interface User {
  id: number
  name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const controller = new AbortController() // 1.

    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/users',
          {
            signal: controller.signal, // 2.
          }
        )
        setUsers(res.data)
      } catch (error) {
        if (error instanceof CanceledError) return // 4.

        setError((error as AxiosError).message)
      }
    }
    fetchUsers()

    return () => controller.abort() // 3.
  }, [])

  return (
    <div className='mt-5 container'>
      {error && <p className='text-danger'>{error}</p>}
      <ul className='list-group'>
        {users.map((user) => (
          <li key={user.id} className='list-group-item'>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
