import React from 'react';
import './About.css';
import Marquee from "react-fast-marquee";
import picture from '../../assets/images/picture1.jpg';
import css from '../../assets/images/css.png'
import bootstrap from '../../assets/images/bootstrap-logo.png'
import express from '../../assets/images/express.png'
import git from '../../assets/images/git.png'
import github from '../../assets/images/github.png'
import html from '../../assets/images/html.png'
import js from '../../assets/images/js.png'
import react from '../../assets/images/react.png'
import tailwind from '../../assets/images/tailwind.png'
import vue from '../../assets/images/vue.png'
import mongodb from '../../assets/images/mongodb.png'
import node from '../../assets/images/nodejs.png'


const About = () => {
   
   

  return (
    <div  id='about' >
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
             <Marquee style={{marginTop: '100px', fontSize: '22px', fontWeight: 'bold', width: '85%', marginLeft: 'auto', marginRight: 'auto', marginBottom: '60px'}}> 
             <img className='stack-logo' src={css} alt="" />   
             <img className='stack-logo' src={bootstrap} alt="" />   
             <img className='stack-logo' src={express} alt="" />   
             <img className='stack-logo' src={git} alt="" />   
             <img className='stack-logo' src={github} alt="" />   
             <img className='stack-logo' src={html} alt="" />   
             <img className='stack-logo' src={js} alt="" />   
             <img className='stack-logo' src={mongodb} alt="" />   
             <img className='stack-logo' src={node} alt="" />   
             <img className='stack-logo' src={react} alt="" />   
             <img className='stack-logo' src={tailwind} alt="" />   
             <img className='stack-logo' src={vue} alt="" />   
            </Marquee>


    </div>
  )
}

export default About