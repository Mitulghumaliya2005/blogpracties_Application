import { useState } from 'react'
import './App.css'
import CreateBlog from './components/CreateBlog/CreateBlog.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateBlog />
    </>
  )
}

export default App
