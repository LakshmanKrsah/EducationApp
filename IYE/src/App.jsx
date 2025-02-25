import { useState } from 'react'
import Home from './home/Home'
import Course from './component/Course'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Courses from './courses/Courses'
import Signup from './component/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course" element={<Courses/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </div>
      
    </>
  )
}

export default App
