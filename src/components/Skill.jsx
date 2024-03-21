import React from 'react'
import skill from "./data/skill.json"

const Skill = () => {
  return (
    <>
      <div className='container skills' id='skills' >
        <h1>SKILLS</h1>
        <div className='items'>
          {
            skill.map((data) => {
              return (
                <>

                  <div className='item' key={data.id}
                 data-aos ="flip-left"
     data-aos-duration = "1000"
                  >
                    <img src={`src/assets/${data.imageSrc}`} alt='' />
                    <h3>{data.title}</h3>
                  </div>


                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Skill
