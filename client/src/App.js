import React, { useState } from 'react'
import "./index.css"
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='tw-text-red-900'>Hello World......</h1>
      <div className='tw-bg-gray-900'>HY</div>
      <Modal />
    </div>
  )
}

export default App
