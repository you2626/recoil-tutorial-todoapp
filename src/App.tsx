import { useState } from 'react'
import './App.css'
import InputTask from './components/InputTask'
import AddTask from './components/AddTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="task">
      <InputTask />
      <AddTask />
      
    </div>
  )
}

export default App
