import React, { useState } from 'react';
import "./Footer.scss";

export default function Footer() {
  const [activeFooterLink, setActiveFooterLink]=useState({})
  const [ActiveLink, setActiveLink]=useState(null)
  const footerArray = [1,2,3,4,5];
  const handleFooterNavLine=(item, index)=>{
    const widthLine = item*20;
    const styles = {
      width: widthLine+ "%"
    }
    setActiveFooterLink(styles)
    setActiveLink(index)
  }
  return (
    <div className='footer container-fluid row mt-2 p-0'>
      <div className='col-12 col-md-6'>
        <div className='nav footer-nav m-0 p-0'>
          {footerArray.map((item, index)=>(
            <a className={ActiveLink===index?'footer-link nav-link active p-0 me-3':'footer-link nav-link p-0 me-3'} key={index} onClick={()=>handleFooterNavLine(item, index)}>{item}</a>
          ))}
        </div>
        <p className='line w-20 m-0 p-0' style={activeFooterLink?activeFooterLink:{width:"20%"}}></p>
      </div>
      <div className='col-12 col-md-6 p-1 d-flex justify-content-between rightNav'>
        <div className='arrows'>
          <span className='text-dark me-1 me-lg-1 me-xl-3 border-light'>
            x
          </span>
          <span className='text-dark justify-content-end me-1 me-lg-1 me-xl-3 border-light'>
            x
          </span>
        </div>
        <div className='medias'>
          <a className='text-light me-1 me-lg-1 me-xl-3' href=''>a</a>
          <a className='text-light me-1 me-lg-1 me-xl-3' href=''>a</a>
          <a className='text-light me-1 me-lg-1 me-xl-3' href=''>a</a>
          <a className='text-light me-1 me-lg-1 me-xl-3' href=''>a</a>
        </div>
      </div>
    </div>
  )
}
