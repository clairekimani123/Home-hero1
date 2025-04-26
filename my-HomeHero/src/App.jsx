import { useState } from 'react'
import './App.css'
import './index.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(null)

  return (
    <div className='min-h-screen bg-gray-100 '>
      <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
        <h1 className='text-3xl font-bold text-primary mb-4'>Welcome to HomeHero</h1>
        <p className='text-lg text-gray-600'>Connect with trusted house managers, babysitters, and urgent assistance providers</p>
        <button className='mt-4 bg-primary text-gray p-3 rounded-lg hover:bg-blue-200 transition'>
          Get Started
        </button>

      </div>
      <Login />
       
    </div>
  );
}

export default App
