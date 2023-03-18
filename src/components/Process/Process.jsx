import React from 'react'
import './process.css'
import HeaderComp from '../HeaderComp'
import L from '../../Assets/line/Vector 15.png'
import N1 from '../../Assets/number/01.png'
import N2 from '../../Assets/number/02.png'
import N3 from '../../Assets/number/03.png'
import N4 from '../../Assets/number/04.png'
import S from '../../Assets/shape.png'
import ProcessSlider from './ProcessSlider'

function Process() {

  const text = "Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
  const name = 'HOW WE BUILD'
  const subname = 'WITH HYDRA VR?'

  const numbers = [
    {
        id : 1,
        num : N1,
        text : '3D Conception & Design'
    },
    {
        id : 2,
        num : N2,
        text : 'Interaction Design'
    },
    {
        id : 3,
        num : N3,
        text : 'VR World User Testing'
    },
    {
        id : 4,
        num : N4,
        text : 'Hydra VR Deploy'
    }
  ]

  return (
    <div className='process_container' id='howTo'>
        <HeaderComp text={text} name={name} subname={subname}/>
        <img src={L} alt="Process Line" className='p_Line' />
        <div className='p_main_container'>
            {
                numbers.map(({id, num, text}) => {
                    return (
                        <div key={id} className='p_main'>
                            <div className='p_num_fon'>
                                <div className='p_num_box'>
                                    <img src={num} alt="Number" className='p_num'/>
                                </div>
                            </div>
                            <div className='p_text_box'>
                                <img src={S} alt="Arrow right" className='p_arrow'/>
                                <p className='p_text'>{text}</p>
                            </div>
                        </div>
                    )
                })
            }
            <ProcessSlider numbers = {numbers}/>
        </div>
    </div>
  )
}

export default Process