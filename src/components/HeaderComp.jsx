import React from 'react'
import L from '../Assets/line/Component 2 (1).png'
import './headerComp.css'

function AboutHeader({name, subname, text}) {
  return (
    <div className='header_comp'>
        <div className='h_left'>
            <div className='h_text'>
               <p className='h_text_1'>{name}</p>
               <p className='h_text_2'>{subname}</p>
            </div>
            <div className='header_L h_L'>
               <img src={L} alt='Line' className='h_line'/>
            </div>
        </div>
        <div className='h_right'>
            <span className='h_right_text'>
                {text}
            </span>
        </div>
    </div>
  )
}

export default AboutHeader