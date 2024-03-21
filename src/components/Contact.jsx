import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className='container contact' id='contact'>
        <h1>CONTACT ME</h1>
        <div className='contact-icons'
         data-aos ="zoom-in-up"
     data-aos-duration = "1000"
        >
          <div className='items'>
          <FaInstagram className='icons'/>
          </div>
          <div className='items'>
          <CiFacebook  className='icons' />
          </div>
          <a href='https://www.linkedin.com/in/harshita-soni-b62a37237/' target='_blank' className='items'>
          <CiLinkedin className='icons' />
          </a>
          <div className='items'>
          <FaSquareXTwitter className='icons' />
          </div>
          <a  href= " https://github.com/harshitabak" target='_blank' className='items' >
          <FaSquareGithub  className='icons'/>
          </a>
          <a href=' mailto:sonih441@gmail.com' target ='_blank' className='items'>
          <SiGmail  className='icons' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
