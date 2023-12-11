import React, { useState } from 'react';
import './Navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {

const [toggle, setToggle] = useState(false)




  return (
    <div>
      <nav className='navbar'>

         <h1 style={{color: 'lightgrey', cursor: 'pointer'}}>Ytoyin<span className='media'>Media</span></h1>

         <ul className='nav-flex'>
           <li><a className='media' href="#">Home</a></li>
           <li><a href="#About">About</a></li>
           <li><a href="#Service">Projects</a></li>
           <li><a href="#Project">Contact</a></li>
          
         </ul>

         <button className='resume' style={{}}>Resume</button>

         <button className='btn-mobile'>{!toggle ? <FaBars  style={{fontSize: '18px'}} onClick={()=> setToggle(true)}/> :<FaTimes style={{color: 'red',fontSize: '18px'}} onClick={()=> setToggle(false)}/>}</button>
      </nav>
       
       <nav className={toggle ? 'nav-mobile show' : 'nav-mobile' }>
         
         
         <ul>
           <li><a className='media' href="#">Home</a></li>
           <li><a href="#About">About Us</a></li>
           <li><a href="#Service">Services</a></li>
           <li><a href="#project">Projects</a></li>
         </ul>
         <button className='mobile-resume' style={{}}>Resume</button>
         
       </nav>
    </div>
  )
}

export default Navbar