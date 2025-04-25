import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(null)

  return (
    <div>
      <Login />
     
       
    </div>
  )
}

export default App
