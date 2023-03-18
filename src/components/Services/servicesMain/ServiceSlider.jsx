import React, { useState } from 'react'
import {GrPrevious, GrNext} from 'react-icons/gr'

function ServiceSlider({cards}) {

    const [index, setIndex] = useState(0)
    const {id, header, image, text, alt} = cards[index]

    const prevBtn = () => {
        setIndex(prev => prev - 1)

        if(index <= 0){
            setIndex(cards.length - 1)
        }
    }

    const nextBtn = () => {
        setIndex(prev => prev + 1)

        if(index >= cards.length - 1){
            setIndex(0)
        }
    }

  return (
    <>
    <div className='s_prev_box'>
      <button className='services_prev_btn' onClick={prevBtn}><GrPrevious/></button>
    </div>
      <div className="services_slider">
        <div key={id} className='services_card_slider'>
                <div className='services_card_image_box'>
                <img src={image} alt={alt}  className='services_card_image'/>
                </div>
                <p className='services_header'>{header}</p>
                <div className='services_line'></div>
                <span className='services_text'>{text}</span>
                <a href='#option' className='services_btn'>TRY IT NOW</a>
        </div>
      </div>
      <div className='s_next_box'>
        <button className='services_next_btn' onClick={nextBtn}><GrNext/></button>
      </div>
    </>
  )
}

export default ServiceSlider