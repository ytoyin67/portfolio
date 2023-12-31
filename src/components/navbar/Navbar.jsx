import React, { useState } from 'react';
import './Navbar.css'
import {FaTimes, FaBars} from 'react-icons/fa'

const Navbar = () => {

const [toggle, setToggle] = useState(false)




  return (
    <div className='main-nav'>
      <nav className='navbar'>

         <h1 style={{color: 'lightgrey', cursor: 'pointer'}}>Ytoyin<span className='media'>Media</span></h1>

         <ul className='nav-flex'>
           <li><a style={{color:'rgb(209, 86, 209)'}} href="#">Home</a></li>
           <li><a href="#About">About</a></li>
           <li><a href="#projects">Projects</a></li>
           <li><a href="#services">Services</a></li>
           <li><a href="#contact">Contact</a></li>
          
         </ul>

         <button className='resume' style={{}}>Resume</button>

         {!toggle && <FaBars className='btn-mobile'  style={{fontSize: '28px', cursor: 'pointer'}} onClick={()=> setToggle(true)}/> }
      </nav>
       
       <nav className={toggle ? 'nav-mobile show' : 'nav-mobile' }>
         
         <FaTimes onClick={()=> setToggle(!toggle)} style={{position: 'absolute', top: '30px', right: '50px', fontSize: '28px', cursor: 'pointer'}}/>
         <ul>
           <li><a onClick={()=> setToggle(false)}  style={{color:'rgb(209, 86, 209)'}} href="#">Home</a></li>
           <li><a onClick={()=> setToggle(false)}  href="#about">About</a></li>
           <li><a onClick={()=> setToggle(false)} href="#projects">Projects</a></li>
           <li><a onClick={()=> setToggle(false)} href="#services">Services</a></li>
           <li><a onClick={()=> setToggle(false)} href="#contact">Contact</a></li>
         </ul>
         <button className='mobile-resume' style={{}}>Resume</button>
         
       </nav>
    </div>
    
  )
}

export default Navbar