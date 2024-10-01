/*
  Effect Clean Up
  - Everytime component is unmounted, it will run the clean up function
  - Re-render = Unmount + Mount
  - When Strict Mode is on, React will run one extra development-only setup+cleanup cycle before the first real setup. This is a stress-test that ensures that your cleanup logic “mirrors” your setup logic and that it stops or undoes whatever the setup is doing. If this causes a problem, implement the cleanup function.

    connected -> mount
    fetching data -> mount
    disconnected -> unmount -> strict mode 
    connected -> mount again -> strict mode
    fetching data


*/

const connect = () => console.log('connected')
const fetchData = () => console.log('fetching data')
const disconnect = () => console.log('disconnected')

import { useEffect } from 'react'

function App() {
  useEffect(() => {
    connect()
    fetchData()
    return () => disconnect() // clean up function
  }, [])

  return <div className='mt-5 container'>App</div>
}

export default App
