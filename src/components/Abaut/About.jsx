import React from 'react'
import HeaderComp from '../../components/HeaderComp'
import AboutMain from './aboutMain/AboutMain'
import L1 from '../../Assets/line/Vector 7.png'
import L2 from '../../Assets/line/Vector 8.png'
function About() {

  const text = "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
  const name = 'INTRODUCTION'
  const subname = 'TO HYDRA VR'

  return (
    <div className='about_container' id='about'>
      <HeaderComp text={text} name={name} subname={subname}/>
      <div className='aboutMain_line_container'>
        <img src={L1} alt='Line' className='about_line1'/>
        <img src={L2} alt='Line' className='about_line2'/>
      </div>
      <AboutMain/>
    </div>
  )
}

export default About