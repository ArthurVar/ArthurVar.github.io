import React from 'react'
import L1 from '../../Assets/line/Vector 19 (1).png'
import L2 from '../../Assets/line/Vector 18 (1).png'
import L3 from '../../Assets/line/Vector 17.png'
import L4 from '../../Assets/line/Vector 20.png'
import P from '../../Assets/navbar/Vector (5).png'
import S1 from '../../Assets/social/facebook (2).png'
import S2 from '../../Assets/social/twitter.png'
import S3 from '../../Assets/social/linkedin.png'
import S4 from '../../Assets/social/youtube.png'
import S5 from '../../Assets/social/instagram.png'
import S6 from '../../Assets/social/pinterest.png'
import './footer.css'

function Footer() {
  return (
    <div className='footer_container' id='footer'>
        <img src={L1} alt="Footer Line 1" className='f_line1'/>
        <img src={L2} alt="Footer Line 2" className='f_line2'/>
        <div className='footer_comp'>
            <div className='f_comp1'>
                <div className='f_comp1_box1'>
                    <img src={P} alt="Footer Logo" className='f_logo'/>
                </div>
                <img src={L4} alt="Line" className='f_line_m'/>
                <ul className='f_comp1_box2'>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#technologies">TECHNOLOGIES</a></li>
                    <li><a href="#howTo">HOW TO</a></li>
                    <li><a href="#option">JOIN HYDRA</a></li>
                </ul>
                <img src={L4} alt="Line" className='f_line_m'/>
                <ul className='f_comp1_box2'>
                    <li><a href="#">F.A.Q</a></li>
                    <li><a href="#">SITEMAP</a></li>
                    <li><a href="#">CONDITIONS</a></li>
                    <li><a href="#">LICENSES</a></li>
                </ul>
                <img src={L4} alt="Line" className='f_line_m' />
                <div className='f_comp1_box3'>
                    <p className='f_comp1_box3_p'>SOCIALIZE WITH HYDRA</p>
                    <ul className='f_social'>
                        <li><a href="https://www.facebook.com/"><img src={S1} alt="Facebook" /></a></li>
                        <li><a href="https://twitter.com/"><img src={S2} alt="Twiter" /></a></li>
                        <li><a href="https://linkedin.com/"><img src={S3} alt="Linkedin" /></a></li>
                        <li><a href="https://www.youtube.com/"><img src={S4} alt="Youtube" /></a></li>
                        <li><a href="https://www.instagram.com/"><img src={S5} alt="Instagram" /></a></li>
                        <li><a href="https://www.pinterest.com/"><img src={S6} alt="Pinterest" /></a></li>
                    </ul>
                    <div className='f_btn_box'>
                        <a href="#option" className='f_btn'>BUILD YOUR WORLD</a>
                    </div>
                </div>
            </div>
            <div className='f_comp2'>
                <img src={L3} alt="Fotter Line 3"  className='f_comp2_img'/>
                <p className='f_comp2_text'>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
            </div>
        </div>
    </div>
  )
}

export default Footer