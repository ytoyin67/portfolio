

import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Service from './components/services/Service';
import Project from './components/projects/Project';
import Review from './components/reviews/Review';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';



function App() {
 
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

export default App
