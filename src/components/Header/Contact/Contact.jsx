import React from 'react'
import "./contact.css"
//import {GrFormPrevious, GrFormNext} from 'react-icons/gr'
import {FiPhoneCall} from 'react-icons/fi'
import {MdOutlineLocalPostOffice} from 'react-icons/md'
import {TbMapPin} from 'react-icons/tb'
import ContactSlider from './ContactSlider'

function Contact() {
  return (
    <div className='contact'>
        <div className='cont_container'>
            <div className='contact_item'>
                <div className='contact_item_1'>
                    <a href='https://goo.gl/maps/cbHjYn6d8dvR9fd66' target='_blank' ><TbMapPin className='contact_map'/></a>
                    <div>
                        <p>Pay Us a Visit</p>
                        <pre>Union St, Seattle, WA 98101, United States</pre>
                    </div>
                </div>
                <div className='contact_item_2'>
                    <FiPhoneCall className='contact_tel'/>
                    <div>
                        <p>Give Us a Call</p>
                        <pre>(110) 1111-1010</pre>
                    </div>
                </div>
                <div className='contact_item_3'>
                    <a href="mailto:someone@example.com" target='_blank' ><MdOutlineLocalPostOffice className='contact_mail'/></a>
                    <div>
                        <p>Send Us a Message</p>
                        <pre>Contact@HydraVTech.com</pre>
                    </div>
                </div>
            </div>
        </div>
        <div className='contact_slider'><ContactSlider/></div>
    </div>
  )
}

export default Contact