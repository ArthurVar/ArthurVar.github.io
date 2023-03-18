import React from 'react'
import ReactInputMask from 'react-input-mask'
import './option.css'
import L from '../../Assets/line/Vector 16.png'
import { useForm } from 'react-hook-form'
import {BiMessageRoundedError} from 'react-icons/bi'

function Option() {

    const {
        register,
        formState: {errors, isValid},
            handleSubmit,
            reset 
    } = useForm({
        mode: 'onBlur'
    });

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

  return (
    <div className='option_container' id='option'>
        <div className='o_main'>
            <div className='o_header_box'>
                <p className='o_name'>JOIN HYDRA</p>
                <img src={L} alt="Option Line" className='o_line'/>
                <span className='o_subname'>Let’s Build Your VR Experience</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='option_form'>
                <div className='f_item_container'>
                    <div className='f_item_box'>
                        <div className='f_item_box1'>
                            <input {...register('FirstName', {
                                    required: '',
                                    minLength: {
                                        value: 3,
                                        message: ''
                                    }
                                })
                            } className='f_item1' placeholder='First Name'/>
                            <div style={{height: 20}}>
                                {errors?.FirstName && <p className='f_errors'>{errors?.FirstName?.message || 'Error'} <BiMessageRoundedError/></p>}
                            </div>
                        </div>
                        <div className='f_item_box1'>
                            <input {...register('LastName', {
                                    required: '',
                                    minLength: {
                                        value: 3,
                                        message: ''
                                    }
                                })
                            } className='f_item2' placeholder='Last Name'/>
                            <div style={{height: 20}}>
                                {errors?.LastName && <p className='f_errors'>{errors?.LastName?.message || 'Error'} <BiMessageRoundedError/></p>}
                            </div>
                        </div>
                    </div>
                    <div className='f_item_box'>
                        <div className='f_item_box1'>
                            <input {...register('Email', {
                                    required: '',
                                    minLength: {
                                        value: 3,
                                        message: ''
                                    }
                                })
                            } className='f_item3' placeholder='Email'/>
                            <div style={{height: 20}}>
                                {errors?.Email && <p className='f_errors'>{errors?.Email?.message || 'Error'} <BiMessageRoundedError/></p>}
                            </div>
                        </div>
                        <div className='f_item_box1'>
                            <ReactInputMask {...register('Tell', {
                                    required: '',
                                    minLength: {
                                        value: 3,
                                        message: ''
                                    }
                                })
                            } mask={`+\\374\\(99)99-99-99`} className='f_item4' placeholder='Phone Number'/>
                            <div style={{height: 20}}>
                                {errors?.Tell && <p className='f_errors'>{errors?.Tell?.message || 'Error'} <BiMessageRoundedError/></p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='f_item_box2'>
                    <input {...register('Subject', {
                                    required: '',
                                    minLength: {
                                        value: 3,
                                        message: ''
                                    }
                                })
                            } className='f_item5' placeholder='Subject'
                        />
                        <div style={{height: 20}}>
                            {errors?.Subject && <p className='f_errors'>{errors?.Subject?.message || 'Error'} <BiMessageRoundedError/></p>}
                        </div>
                </div>
                <div className='f_item_box3'>
                    <textarea {...register('TellUsSomething', {
                                    required: '',
                                    minLength: {
                                        value: 20,
                                        message: ''
                                    }
                                })
                            } className='f_item6' placeholder='Tell Us Something...'
                        />
                        <div style={{height: 20}}>
                             {errors?.TellUsSomething && <p className='f_errors'>{errors?.TellUsSomething?.message || 'Error'} <BiMessageRoundedError/></p>}
                        </div>
                </div>
                <button className='f_item7' disabled={!isValid}>SEND TO HYDRA</button>
            </form>
        </div>
    </div>
  )
}

export default Option