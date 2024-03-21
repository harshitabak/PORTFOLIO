import React, { useRef } from 'react'
import pdf from "../pdf/Resume.pdf.pdf"
import  hero from "./data/hero.json"
import Typed from 'typed.js'
import { useEffect } from 'react'
const Home = () => {
  const typedRef = useRef(null)
  useEffect(()=>{
      const option ={
        strings:['Welcome To My Profile',"My Name Is  Harshita Soni" , " I'm Full Stack Developer " ,"React Developer" ,"Node.js Developer" ],
        typeSpeed:50,
        backSpeed :50,
        loop:true
      }
      const typed = new Typed(typedRef.current,option)
       return ()=>{
        typed.destroy()
       }
  },[])
  return (
    <>
      <div className='container home' id ='home'>
        <div className='left'
        data-aos ="fade-up-right"
     data-aos-duration = "1000"
        >
          <h1 ref ={typedRef}> </h1>
          <a href={pdf} download= "Resume.pdf" className='btn btn-outline-warning mg-4'> Download Resume</a>
        </div>
        <div className='right'>
          <div className='img'
          data-aos ="fade-up-left"
     data-aos-duration = "1000"
          >
            <img src={`/src/assets/${hero.imgSrc}`} alt='hero'/>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
