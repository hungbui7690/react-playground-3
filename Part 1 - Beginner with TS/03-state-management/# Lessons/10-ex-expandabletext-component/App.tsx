/*
  Exercise - Building an ExpandableText Component


*/

import 'bootstrap/dist/css/bootstrap.css'
import ExpandableText from './components/ExpandableText'

function App() {
  return (
    <div className='mt-5 container'>
      <ExpandableText>Hello World</ExpandableText>
      <ExpandableText>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
        suscipit ducimus. Laboriosam animi perspiciatis officia harum corrupti.
        Dolores dolor consequatur perferendis, aliquid expedita, vitae debitis
        fuga autem id voluptas harum!
      </ExpandableText>
    </div>
  )
}

export default App
