import React from 'react'
import './Service.css'




const Service = () => {

  return (

    <div   id='services' style={{backgroundColor: 'rgba(25, 23, 23, 0.8)', overflowX: 'hidden'}}>
      <div className="container">

        <h4>Services i offer to my clients</h4>
        <h1>My Best <span>Service</span></h1>
        <div className="service-grid">
           <div className="web-dev" style={{}}>
              <h2>Web Development</h2>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Er cum laboriosamror cupiditate laudantium, quos dolore quaerat quis voluptatibus facilis fugiat culpa consequuntur!</p>

              <button>Pricing</button>
           </div>

           <div className="mern-app" style={{}}>
              <h2>MERN Application</h2>
              <p>Lorem ipsum, dolor sit amet consectetur  cum laboriosamadipisicing elit. Maiores culpa modi cupiditate! Quasi explicabo maiores deleniti facere pariatur </p>
              <button style={{ border: '1px solid white'}}>Pricing</button>
           </div>

           <div className="responsive-web" style={{}}>
                <h2>Responsive Web Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetur taque exercitationem esse reiciendis nemo corrupti natus a dolores sed eaque asperiores voluptas repellendus rerum, cum laboriosam?</p>
                <button>Pricing</button>
            </div>

            <div className="frontend" style={{}}>
                <h2>Frontend</h2>
                <p>Lorem ipsum dolor sit amet, consectetur taque exercitationem esse reiciendis nemo corrupti natus a dolores sed eaque asperiores voluptas repellendus rerum, cum laboriosam?</p>
                <button>Pricing</button>
             </div> 
              
           <div className="server-side" style={{}}>
              <h2>Server-Side App</h2>
              <p>Lorem ipsum dolor sit amet, consectetur taque exercitationem esse reiciendis nemo corrupti natus a dolores sed eaque asperiores voluptas repellendus rerum, cum laboriosam?</p>
              <button>Pricing</button>
            
           </div>
        </div>
      </div>
    </div>
  )
}

export default Service