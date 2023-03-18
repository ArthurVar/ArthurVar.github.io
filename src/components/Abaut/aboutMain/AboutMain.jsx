import React from 'react'
import './aboutMain.css'
import P from '../../../Assets/photo/photo 1.png'


function AboutMain() {
  return (
    <div className='aboutMain'>
      <div className="aboutMain_container">
        <div className="about_photo_box">
          <img src={P} alt="Photo" className='about_photo' />
        </div>
        <div className="about_text_container">
          <h1 className='about_name'>ABOUT</h1>
          <span className='about_subname'>HYDRA VR</span>
          <p className='about_right_text'>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
            urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
            dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
            Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
            sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
            cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
            retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
            n tempor.
          </p>
          <a href='#footer' className="about_btn">LET’S GET IN TOUCH</a> 
        </div>
      </div>
    </div>
  )
}

export default AboutMain