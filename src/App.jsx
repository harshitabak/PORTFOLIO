
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Exprience from './components/Exprience'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <Navbar/>
 <div className='container'><Home/></div>
 <Exprience/>
 <Skill/>
 <Projects/>
 <Contact/>
      
    </>
  )
}

export default App
