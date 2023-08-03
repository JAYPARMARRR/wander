//rafce
import React from 'react'
import './Footer.css'

// import icon 
import {HiPhone} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import {FaLocationArrow} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>      
      <div className="secContainer container">     
         <div className="content grid">
         
         
          <div className="row">
            <div className="spanText">
              CONTACT US
            </div>
             <div className="contactDiv">
              <span className="flex">
                <HiPhone className='icon'/>
                <span>+9510923353</span>
              </span>
              <span className="flex">
                <MdEmail className='icon'/>
                <span>jaykumarvinodbhi@gmail.com</span>
              </span>
              <span className="flex">
                <FaLocationArrow className='icon'/>
                <span>+9510923353</span>
              </span>
             </div>
          </div>

          <div className="row">
            <div className="spanText">
              POPULAR NEWS
            </div>

            <div className="singleNEWs">
              <span className="text">
                Your Personal Guide to the most places to visit in the World

              </span>
              <p>
                Mar 09, 2023
              </p>
            </div>
         

            <div className="singleNEWs">
              <span className="text">
                The grand reveal of the most iconic hotel in the World - Atlantis The Royal
              </span>
              <p>
                Mar 10, 2023
              </p>
            </div>


          </div>

          <div className="row">
            <div className="spanText">
              QUICK LINKS
            </div>
            <div className="footerLinks">
              <ul>
                <li > About Us </li>
                <li > Our Team </li>
                <li > Gallery </li>
                <li >  Blog </li>
                <li > Careers </li>
                 
              </ul>
            </div>
          </div>

        </div>
        <div className="bottomdiv flex">
          <p>
            Copyright 2023 IsraTech - All rights reserved
          </p>
          <div className="socials flex">
            <FaFacebookF className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/>
            <AiFillInstagram className='icon'/>  
          </div>
          <p>
            Privacy Policy
          </p>
        </div>

      </div>
      
    </div>
  )
}

export default Footer
