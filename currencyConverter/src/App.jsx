import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div id="header" className='m-1 p-1 bg-purple-400 text-slate-100 bold rounded text-3xl'>Currency Converter</div>
    </>
  )
}

export default App
