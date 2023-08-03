//rafce
import React from 'react'
import './Tours.css'

// import imgges
  import tourImaggel from '../Assets/pexels-rachel-claire-4577743.jpg'  
  import tourImagge2 from '../Assets/pexels-pok-rie-2011534.jpg'  

  // import icon
import {AiFillStar} from 'react-icons/ai'

const Tours = () => {
  return (
    <div className='tours container section '>
      <div className="secContainer">
        <span className="secTitle">
           Hot Tours
        </span>
        <div className="tourcontainer">

        <div className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImaggel} />
            </div>
             <div className="tourInfo">
              <span className="tourTitle">
                Spain, Benidorm
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  2 Customer Review
                </small>
              </div>
              <p>
          Spain, a country on Europe,s Iberian Peninsula, includes 17 autonomous reginos
          with diverse geography and cultures. Capital city Madrid is home to the royal
          Palace and Prado museum, housing works by European masters  


              </p>
              <button className='btn'>Buy This Tour</button>
             </div>

             <span className="price">
             ₹60,000
             </span>


          </div> 

          <div className="singleTour grid">
            <div className="imgDiv">
              <img src={tourImagge2} />
            </div>
             <div className="tourInfo">
              <span className="tourTitle">
                Mauritius Island, India
              </span>
              <div className="stars_review flex">
                <div className="stars">
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                  <AiFillStar className='icon'/>
                </div>
                <small className='custReview'>
                  12 Customer Review
                </small>
              </div>
              <p>
             Mauritius, an Indian Ocean island nation, is known for its beaches,lagoons  and reefs. The 
             Mountainous interior includes  Black River Gorges National Park,with rainforests
              </p>
              <button className='btn'>Buy This Tour</button>
             </div>

             <span className="price">
             ₹35,000
             </span>


          </div>

          </div> 
      </div>
      
    </div>
  )
}

export default Tours
