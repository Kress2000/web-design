import React, { useState } from 'react';
import {BsArrowLeft} from 'react-icons/bs';
import {BsArrowRight} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {TfiTwitter} from 'react-icons/tfi';
import {SlSocialFacebook} from 'react-icons/sl';
import {TbBrandGithub} from 'react-icons/tb';

import "./Footer.scss";


export default function Footer() {
  const [activeFooterLink, setActiveFooterLink]=useState({})
  const [ActiveLink, setActiveLink]=useState(null);
  const [homeActive, setHomeActive] = useState(true);
  const footerArray = [1,2,3,4,5];
  const handleFooterNavLine=(item, index)=>{
    const widthLine = item*20;
    const styles = {
      width: widthLine+ "%"
    }
    setActiveFooterLink(styles)
    setActiveLink(index)
    setHomeActive(false)
  }
  const medias=[
    {
      icon: <TbBrandGithub />,
      href: ""
    },
    {
      icon: <BsInstagram />,
      href: ""
    },
    {
      icon: <TfiTwitter />,
      href: ""
    },
    {
      icon: <SlSocialFacebook />,
      href: ""
    },

  ]
  return (
    <div className='footer container-fluid row mt-2 p-0'>
      <div className='col-12 col-md-6 footer-nav-box d-flex flex-column justify-content-center' id='footer-nav-box'>
        <div className='nav footer-nav m-0 p-0' id='footer-nav'>
          {footerArray.map((item, index)=>(
            <a id={homeActive && index===0?"homeActive": ""} className={ActiveLink===index?'footer-link nav-link active p-0 me-3':'footer-link nav-link p-0 me-3'} key={index} onClick={()=>handleFooterNavLine(item, index)}>0{item}</a>
          ))}
        </div>
        <p className='line w-20 m-0 p-0' style={activeFooterLink?activeFooterLink:{width:"20%"}}></p>
      </div>
      <div className='col-12 col-md-6 p-1 d-flex justify-content-between align-items-center row rightNav' id='rightNav'>
        <div className='arrows child1 mt-2 mb-2 mb-lg-0 mt-md-0' id='child1'>
          <span className='text-dark justify-content-end arrow me-4 border-light'>
            <BsArrowLeft  className='smallArrowsL'/>
          </span>
          <span className='text-dark justify-content-start arrow ms-4 me-0 border-light'>
            <BsArrowRight className='smallArrowsR' />
          </span>
        </div>
        <div className='medias child2 d-flex justify-content-between mt-2 mt-md-0' id="medias">
          {medias.map((media, i)=> <a key={i} className='text-light me-1 me-lg-1 me-xl-3 alink' href={media.href}>{media.icon}</a>)}
        </div>
      </div>
    </div>
  )
}
