import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container nav_bar'
     data-aos ="fade-down"
     data-aos-duration = "1000"
    >
    <div className='left nav_items'>Portfolio</div>
    <div className='right'>
    <a href='#home' className='nav_items'>Home</a>
    <a href='#exprience' className='nav_items'>Exprience</a>
    <a href='#skills' className='nav_items'>Skills</a>
    <a href='#projects' className='nav_items'>Projects</a>
    <a href='#contact' className='nav_items'>Contact</a>
    </div>
      
    </div>
  )
}

export default Navbar
