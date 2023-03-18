import React from 'react'
import HeaderText from "./HeaderText/HeaderText"
import HeaderImg from "./HeaderImg/HeaderImg"
import "./headerInfo.css"


function HeaderInfo() {
  return (
    <div className='container' id='#'>
        <HeaderText/>
        <HeaderImg/>
    </div>
  )
}

export default HeaderInfo