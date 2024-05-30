import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Read from './components/Read'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './components/Update'


function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Read/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path="/update/:id" element={<Update />} />
    </Routes>
    </BrowserRouter>
    
      
    </>
  )
}

export default App
