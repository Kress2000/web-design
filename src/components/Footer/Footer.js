import React, { useState } from 'react';
import {BsArrowLeft} from 'react-icons/bs';
import {BsArrowRight} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {TfiTwitter} from 'react-icons/tfi';
import {SlSocialFacebook} from 'react-icons/sl';
import {TbBrandGithub} from 'react-icons/tb';
import styles from './Footer.module.scss';

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
    <div className={`footer container-fluid row ${styles.footer} mb-3`}>
      <div className={`col-12 col-md-6 d-flex flex-column position-relative p-0 mb-3 mb-md-0 p-0 ${styles.footernavbox}`}>
        <div className={`nav py-2 m-0 ${styles.footerNav}`} >
          {footerArray.map((item, index)=>(
            <a className={ActiveLink===index?`${styles.footerlink} nav-link p-0 me-3 me-xxl-5 ${styles.active}`:`${homeActive && index===0?styles.homeActive: ''} nav-link p-0 me-3 me-xxl-5 ${styles.footerlink}`} key={index} onClick={()=>handleFooterNavLine(item, index)} href>0{item}</a>
          ))}
        </div>
        <p className={`${styles.line} w-20 position-absolute m-0 s-0 p-0`} style={activeFooterLink?activeFooterLink:{width:"20%"}}></p>
      </div>
      <div className={`col-12 col-md-6 p-1 d-flex justify-content-between align-items-center ${styles.rightNav}`}>
        <div className={`${styles.child1} h-100 d-flex`}>
          <span className={`text-dark justify-content-end ${styles.arrow} me-3 me-lg-4 me-xxl-5 border-light`}>
            <BsArrowLeft  className={styles.arrowL}/>
          </span>
          <span className={`text-dark justify-content-start ${styles.arrow} ms-3 ms-lg-4 ms-xxl-5 border-light`}>
            <BsArrowRight className={styles.arrowR} />
          </span>
        </div>
        <div className={`${styles.child2} d-flex`}>
          {medias.map((media, i)=> <a key={i} className={`text-light me-3 me-lg-4 me-xl-5 ${styles.alink}`} href={media.href}>{media.icon}</a>)}
        </div>
      </div>
    </div>
  )
}
