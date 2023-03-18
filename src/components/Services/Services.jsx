import React from 'react'
import HeaderComp from '../../components/HeaderComp'
import ServicesMain from './servicesMain/ServicesMain'
import L from '../../Assets/line/Vector 14.png'

function Services() {

  const text = "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
  const name = 'WHY BUILD'
  const subname = 'WITH HYDRA?'

  return (
    <div className='services_section' id='services'>
        <HeaderComp text={text} name={name} subname={subname}/>
        <img src={L} alt="Line" className='services_main_line'/>
        <ServicesMain/>
    </div>
  )
}

export default Services