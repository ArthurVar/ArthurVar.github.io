import React, { useState } from 'react'
import P from '../../Assets/technologies/pexels 1.png'
import T1 from '../../Assets/technologies/Hydra-Tech1 1 (1).png'
import T2 from '../../Assets/technologies/Hydra-Tech2 1.png'
import T3 from '../../Assets/technologies/Hydra-Tech3 1.png'
import T4 from '../../Assets/technologies/Hydra-Tech4 1 (1).png'
import {BsChevronDown} from 'react-icons/bs'
import './technologies.css'
import {GrPrevious, GrNext} from 'react-icons/gr'

function Technologies() {

    const image = [
        {photo : T1},
        {photo : T2},
        {photo : T3},
        {photo : T4}
    ]

    const [open, setOpen] = useState(false)
    const [item, setItem] = useState(0)
    const {photo} = image[item]

    const prevBtnT = () => {
        setItem(prev => prev - 1)

        if(item <= 0){
            setItem(image.length - 1)
        }
    }

    const nextBtnT = () => {
        setItem(prev => prev + 1)

        if(item >= image.length - 1){
            setItem(0)
        }
    }


  return (
    <div className='tech_container' id='technologies'>
        <div className='tech_main_box'>
            <div className='tech_main'>
                <img src={P} alt="Tech Photo" className='tech_photo'/>
                <p className='tech_name'>TECHNOLOGIES & HARDWARE</p>
                <span className='tech_subname'>USED BY HYDRA VR.</span>
                <div className='tech_btn_box' onClick={() => setOpen(!open)}>
                    <button className='tech_btn'><BsChevronDown/></button>
                </div>
            </div>
            <div className='tech_item_box'>
                {
                open &&  <div className='tech_item'>
                                <img src={T1} alt="Tech 1" />
                                <img src={T2} alt="Tech2" />
                                <img src={T3} alt="Tech 3" />
                                <img src={T4} alt="Tech 4" />
                            </div>
                }
                <div className='tech_item_slider'>
                    <div className='t_prev_box'>
                        <button className='t_prev_btn' onClick={prevBtnT}><GrPrevious/></button>
                    </div>
                    <div className='tech_item_sl'>
                        <img src={photo} alt="Tech 1" className='t_item1'/>
                    </div>
                    <div className='t_next_box'>
                        <button className='t_next_btn' onClick={nextBtnT}><GrNext/></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Technologies