import React from 'react';
import './Hero.css';
import picture from '../../assets/images/picture.jpg';
import { TypeAnimation } from 'react-type-animation';





const Hero = () => {
  return (
    <div  style={{backgroundColor: 'rgba(25, 23, 23, 0.8)', overflowX: 'hidden'}}>
      <div className="hero-grid">
         <div className="left">

         <h5>Hi, I'm Yusuf Toyin</h5>
                <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'I"m a FullStack Developer',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
               
                1000,
                'I"m a Frontend Developer',
                1000,
                'I"m a Backend Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2.8em', display: 'inline-block' }}
              repeat={Infinity}
            />


           
            {/* <h1>I'm a <span>Fullstack</span> Developer</h1> */}
            <p>I am a passionate fullstack developer specialize in building highly scalable and efficient websites without compromising user experience. </p>
            <button>Hire Me</button>
         </div>

         <div className="right">
           <div className="picture">
            <img className='my-picture' src={picture} alt="" />
           </div>
         </div>
      </div>
    </div>
  )
}

export default Hero