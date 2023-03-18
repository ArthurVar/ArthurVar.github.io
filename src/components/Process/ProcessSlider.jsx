import React, { useState } from 'react'
import {GrPrevious, GrNext} from 'react-icons/gr'

function ProcessSlider({numbers}) {

    const [index, setIndex] = useState(0)
    const {id, num, text} = numbers[index]

    const prevBtn = () => {
        setIndex(prev => prev - 1)

        if(index <= 0){
            setIndex(numbers.length - 1)
        }
    }

    const nextBtn = () => {
        setIndex(prev => prev + 1)

        if(index >= numbers.length - 1){
            setIndex(0)
        }
    }

  return (
    <>
      <div className='p_prev_box'>
        <button onClick={prevBtn} className='p_prev'><GrPrevious/></button>
      </div>
      <div key={id} className='p_main_s'>
        <div className='p_num_fon'>
            <div className='p_num_box'>
                <img src={num} alt="Number" className='p_num'/>
            </div>
        </div>
        <div className='p_text_box'>
            <p className='p_text'>{text}</p>
        </div>
      </div>
      <div className='p_next_box'>
        <button onClick={nextBtn} className='p_next'><GrNext/></button>
      </div>
    </>
  )
}

export default ProcessSlider