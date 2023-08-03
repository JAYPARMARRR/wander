//rafce
import React from 'react'
import './Cards.css'

// imported Images
import CardImagel from '../Assets/pexels-taryn-elliott-3889704.jpg'
import CardImage2 from '../Assets/pexels-tiana-614503.jpg'
import CardImagel3 from '../Assets/pexels-tembela-bohle-920038.jpg'

//imported icon
import {AiOutlineSwapRight} from 'react-icons/ai'

const Cards = () => {
  return (
    <div className='cards'>
      <div className="cordContainer container grid">
        <div className="singleCard">
          <div className="imgDiv">
            <img src={CardImagel}  />
          </div>
          <h4 className="textDiv">
            Balloon Flight
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={CardImage2}  />
          </div>
          <h4 className="textDiv">
           Beach Travels
          </h4>
        </div>

        <div className="singleCard">
          <div className="imgDiv">
            <img src={CardImagel3}  />
          </div>
          <h4 className="textDiv">
            Mountain Tours
          </h4>
        </div>
      </div>
      <div className="spanText flex">
        Other Tours <AiOutlineSwapRight className='icon'/>
        </div> 
    </div>
  )
}

export default Cards
