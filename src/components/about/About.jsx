import React from 'react'
import './About.css';
import picture from '../../assets/images/picture1.jpg';
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div>
        <h1 className='about-text'>About</h1>
        <div className="about-grid">

            <div className=" about-left">
               <img className='about-pic' src={picture} alt="" />
            </div>

            <div className="about-right">
                <h1>Yusuf<span> Toyin</span></h1>
                <p>I am a highly analytical and passionate Software Developer with expertise in HTML, CSS, JavaScript, React and  NodeJs. I develop dynamic and responsive interfaces that meet client needs. </p>

                <div className="skills">
                  <h3>My Skills</h3>

                  <div className="skill-list">
               
                      <button>HTML</button>
                      <button>CSS</button>
                      <button>Javascript</button>
                      <button>React</button>
                      <button>Vue</button>
                     
                      <button>NodeJs</button>
                      <button>Bootstrap</button>
                      <button>Git</button>
                      <button>Github</button>
                    
                     
                  </div>
                  
                <button className='btn'>Hire Me</button>
                </div>
            </div>
      </div>
             <Marquee style={{marginTop: '30px', fontSize: '22px', fontWeight: 'bold', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}> 
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, nobis voluptatem ullam sint minima enim iste illum aspernatur debitis soluta maiores sit doloremque velit beatae reprehenderit doloribus nesciunt dolorem error.     
            </Marquee>


    </div>
  )
}

export default About