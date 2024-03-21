import React from 'react'
import exprience from "./data/exprience.json"

const Exprience = () => {
  return (
    <>
      <div className='container ex' id='exprience'>
        <h1>EXPRIENCE</h1>
        {
          exprience.map((data)=>{
          return(
            <>
              <div key={data.id} className='ex-items text-center my-5'
               data-aos ="zoom-in"
                 data-aos-duration = "1000"
              >
                <div className='left'>
                  <img  style={{height:"50px"}} src={data.imageSrc} alt='function up' />
                </div>
                <div className='right'>
                  <h2>{data.role} at</h2>
                  <h2>{data.organisation}</h2>
                 <h4>
                  <span style={{color:"yellowGreen"}} >
                  {data.startDate} {data.endDate} {" "}
                  </span> { ' '}
                  <span style={{color:"yellow"}}> {data.location}</span>
                 </h4>
                 <h5 style={{color:"yellow"}}>{data.experiences[0]}</h5>
                 <h5 style={{color:"yellow"}}> {data.experiences[1]}</h5>
                </div>
              </div>
            </>
          )
          })
        }
      </div>
    </>
  )
}

export default Exprience
