import React from 'react'
import "./headerText.css"
import L from "../../../../Assets/shape.png"
import Line from "../../../../Assets/line/Vector 4.png"


function HeaderText() {
  return (
    <div className='ht_container'>
        <img src={Line} alt='' className='text_line'/>
        <div className='header_container'>
            <p><span>Dive</span> Into The Depths</p>
            <p>Of <span>Virtual Reality</span></p>
        </div>
        <div className='text_container'>
            <p className='text_container_item'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore 
                nisl tincidunt eget. Lectus mauris eros in vitae .
            </p>
        </div>
        <div className='text_link_container'>
            <a href='#option' className='text_link_btn'>BUILD YOUR WORLD</a>
            <a href='#option' className='text_link_btn_img'><img src={L}/></a>
        </div>
    </div>
  )
}

export default HeaderText