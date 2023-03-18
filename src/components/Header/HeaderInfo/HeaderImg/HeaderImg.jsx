import React from 'react'
import "./headerImg.css"
import L1 from "../../../../Assets/line/Vector 1.png"
import L2 from "../../../../Assets/line/Vector 3.png"
import L3 from "../../../../Assets/line/Vector 2 (1).png"
import img4 from "./header_img.png"

function HeaderImg() {
  return (
    <div className='hi_container'>
      <div className='header_line_container'>
        <img src={L1} alt="Line"/>
        <img src={L2} alt="Line"/>
        <img src={L3} alt="Line"/>
      </div>
      <div className='header_img_box'>
          <img src={img4} alt='' className='header_img'/>
      </div>
    </div>
  )
}

export default HeaderImg