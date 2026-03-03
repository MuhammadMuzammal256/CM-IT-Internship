import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 className="bg-red-600 text-white text-center h-[1000px] flex items-center justify-center">
  Hello World
</h1>
    </>
  )
}

export default App
