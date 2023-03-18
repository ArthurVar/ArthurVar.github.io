import React from 'react'
import Logo from "../../../Assets/navbar/Vector (5).png"
import H from "../../../Assets/navbar/Vector (6).png"
import Y from "../../../Assets/navbar/Vector (7).png"
import D from "../../../Assets/navbar/Vector (8).png"
import R from "../../../Assets/navbar/Vector (9).png"
import A from "../../../Assets/navbar/Vector (10).png"

function NavbarLogo() {
  return (
    <div className='logo_container'>
        <div className='logo'>
            <img src={Logo} alt='Logo'/>
        </div>
        <div className='nav_bar_name'>
          <img src={H} alt="H" className='name_item_1'/>
          <img src={Y} alt="Y" className='name_item_2'/>
          <img src={D} alt="D" className='name_item_3'/>
          <img src={R} alt="R" className='name_item_4'/>
          <img src={A} alt='A' className='name_item_5'/>
        </div>
    </div>
  )
}

export default NavbarLogo