import React from 'react'
import './servicesMain.css'
import card1 from '../../../Assets/cards/card1.png'
import card2 from '../../../Assets/cards/card2.png'
import card3 from '../../../Assets/cards/card3.png'
import card4 from '../../../Assets/cards/card4.png'
import ServiceSlider from './ServiceSlider'

function ServicesMain() {

  const cards = [
    {
      id : 1,
      alt : 'Card 1',
      image : card1,
      header : 'SIMULATION',
      text : 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
    {
      id : 2,
      alt : 'Card 2',
      image : card2,
      header : 'EDUCATION',
      text : 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
    {
      id : 3,
      alt : 'Card 3',
      image : card3,
      header : 'SELF-CARE',
      text : 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
    },
    {
      id : 4,
      alt : 'Card 4',
      image : card4,
      header : 'OUTDOOR',
      text : 'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.'
    }
    
  ]

  return (
    <div className='services_container'>
      <div className='cards_container'>
        {
          cards.map(({id, alt, image, header, text}) => {
            return (
              <div key={id} className='services_card'>
                <div className='services_card_image_box'>
                  <img src={image} alt={alt}  className='services_card_image'/>
                </div>
                <p className='services_header'>{header}</p>
                <div className='services_line'></div>
                <span className='services_text'>{text}</span>
                <a href='#option' className='services_btn'>TRY IT NOW</a>
              </div>
            )
          })
        }
        <ServiceSlider cards={cards}/>
      </div>
    </div>
  )
}

export default ServicesMain