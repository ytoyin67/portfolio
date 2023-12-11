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
           <li><a style={{color:'#cf23cf'}} href="#">Home</a></li>
           <li><a href="#About">About</a></li>
           <li><a href="#Service">Projects</a></li>
           <li><a href="#Project">Contact</a></li>
          
         </ul>

         <button className='resume' style={{}}>Resume</button>

         <button className='btn-mobile'>{!toggle ? <FaBars  style={{fontSize: '18px'}} onClick={()=> setToggle(true)}/> :<FaTimes style={{color: 'red',fontSize: '18px'}} onClick={()=> setToggle(false)}/>}</button>
      </nav>
       
       <nav className={toggle ? 'nav-mobile show' : 'nav-mobile' }>
         
         
         <ul>
           <li><a onClick={()=> setToggle(false)}  style={{color:'#cf23cf'}} href="#">Home</a></li>
           <li><a onClick={()=> setToggle(false)}  href="#About">About</a></li>
           <li><a onClick={()=> setToggle(false)} href="#Service">Projects</a></li>
           <li><a onClick={()=> setToggle(false)} href="#project">Contact</a></li>
         </ul>
         <button className='mobile-resume' style={{}}>Resume</button>
         
       </nav>
    </div>
    
  )
}

export default Navbar