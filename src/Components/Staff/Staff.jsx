import React from 'react'
import './Staff.css'


//Imported Images
import user4 from '../Assets/CEO.png.jpg'
import user5 from '../Assets/Shraddha.jpg'
import user6 from '../Assets/Hiren.jpg'
 
const Staff = () => {
  return (
    <div className='staff container section'>
      <div className="secContainer">
        <span className="secTitle">
          Different People - One Mission
        </span>
        <div className="staffContainer grid">


          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user4}  />
            </div>
            <span className="name">
              Jay Parmar
            </span>
            <span className="jobTitle">
              CEO Wander
            </span>
            <span className="contact">
             +9510923353
            </span>
            </div>
          
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user5}  />
            </div>
            <span className="name">
             Shraddha Shukla
            </span>
            <span className="jobTitle">
            Software Engineer
            </span>
            <span className="contact">
             +8200731311
            </span>
            </div>
          
          <div className="singleStaff">
            <div className="imgDiv">
              <img src={user6}  />
            </div>
            <span className="name">
              Hiren Lakhatariya
            </span>
            <span className="jobTitle">
             IT Specialist
            </span>
            <span className="contact">
             +6355621537
            </span>
            </div>
          
         
         
        </div>
      </div>
    
    </div>
  )
}

export default Staff
