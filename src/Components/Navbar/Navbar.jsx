//rafce 
import "./Navbar.css";
import React,{useState} from "react";
//imported icons
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
// chalo bhai Navbar ne displey karavi// scss ma ani css lkheli che 
 const[active,setActive] =useState('menuDiv')

 const showNavbar =()=>{
    setActive ('menuDiv activeNavbar')
 }
// chalo bhai Navbar ne upar pacho nakhi 
const removeNavbar =()=>{
  setActive ('menuDiv')
}


  return (
    <div>
      <div className="header flex">
        <div className="logDiv">
          <h3 className="logo">Wonder</h3>
        </div>
        <div className={active}>
          <ul className="menuLists">
            <ol className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">
                Home
              </a>
            </ol>
            <ol className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">
                About
              </a>
            </ol>
            <ol className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">
                Our Tours
              </a>
            </ol>
            <ol className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">
                Gallery
              </a>
            </ol>
            <ol className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">
                Blog
              </a>
            </ol>
            <ol className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">
                Contact
              </a>
            </ol>
            <ol className="navItem">
              <a href="#" onClick={removeNavbar} className="menuLink">
                Pages
              </a>
            </ol>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div className="socialIcons flex ">
          <BsFacebook className="icon"/>
          <AiOutlineTwitter className="icon"/>
          <AiFillYoutube className="icon"/>
          <AiFillInstagram className="icon"/>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </div> 
    </div>
  );
};

export default Navbar;
