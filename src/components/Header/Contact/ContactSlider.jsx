import React, { useState } from "react";
import {GrPrevious, GrNext} from 'react-icons/gr'
import {FiPhoneCall} from 'react-icons/fi'
import {MdOutlineLocalPostOffice} from 'react-icons/md'
import {TbMapPin} from 'react-icons/tb'

function ContactSlider() {

  const contacts = [
    {
      id: 1,
      link: 'https://goo.gl/maps/cbHjYn6d8dvR9fd66',
      icon:  <TbMapPin className='contact_map'/>,
      header: 'Pay Us a Visit',
      subname: 'Union St, Seattle, WA 98101, United States'
    },
    {
      id: 2,
      link: '#',
      icon:  <FiPhoneCall className='contact_tel'/>,
      header: 'Give Us a Call',
      subname: '(110) 1111-1010'
    },
    {
      id: 3,
      link: 'mailto:someone@example.com',
      icon:  <MdOutlineLocalPostOffice className='contact_map'/>,
      header: 'Pay Us a Visit',
      subname: 'Union St, Seattle, WA 98101, United States'
    }
  ]

  const [index, setIndex] = useState(0)
    const {id, header, link, icon, subname} = contacts[index]

    const prevBtn = () => {
        setIndex(prev => prev - 1)

        if(index <= 0){
            setIndex(contacts.length - 1)
        }
    }

    const nextBtn = () => {
        setIndex(prev => prev + 1)

        if(index >= contacts.length - 1){
            setIndex(0)
        }
    }

  return (
        <div key={id} className="cont_slider_box">
            <button className="cont_btn1" onClick={prevBtn}><GrPrevious/></button>
            <div className="slider_item">
              <a href={link} target='_blank' >{icon}</a>
              <div>
                  <p className="slider_pre">{subname}</p>
              </div>
            </div>
            <button className="cont_btn2" onClick={nextBtn}><GrNext/></button>
        </div> 
  );
}

export default ContactSlider;