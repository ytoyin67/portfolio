
import { useState,useEffect } from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Service from './components/services/Service';
import Project from './components/projects/Project';
import Review from './components/reviews/Review';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import AOS from 'aos';
// import 'aos/dist/aos.css';



function App() {
 
  // useEffect(() => {
  //   AOS.init();
  // }, [])

  const [isLoading, setIsLoading] = useState(true)


  useEffect(()=>{
  setTimeout(()=>{
    setIsLoading(false)
  }, 2000)
  })
if(isLoading){
 return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '2rem', height: "70vh"}}>Loading.....</div> 
} else {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Review />
      <Contact />
      <Footer />
    </>
  )
}


  
}

export default App
