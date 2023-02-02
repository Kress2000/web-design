import React from 'react';
import "./BodyContent.scss";
import styles from './BodyContent.module.scss';

export default function BodyContent() {
  return (
    <div className='container-fluid bodyContainer pt-2 pt-lg-3 pt-xxl-5 row bg-none'>
        <div className='col-12 col-md-4 fisrtBox d-flex flex-column p-0 m-0'>
            <p className={`${styles.p} text-sm lorem`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus molestie massa,
                id vulputate mauris iaculis nec. Quisque elementum risus vel dui efficitur volutpat.
            </p>
            <div className='imgBox'>
                <img src="/imgs/food-semired.png" className={`${styles.img} ${styles.imgL} img-fluid`} alt='Img'/>
            </div>
            <div className='loremTitleBox'>
                <p className='text-sm smallDetails m-0'>Lorem ipsum dolor sit amet, consectetur</p>
                <h1 className='title fw-bolder m-0'>Lorem ipsum</h1>
            </div>
        </div>
        <div className='col-12 col-md-4 middleBox p-0 m-0'>
        </div>
        <div className={`col-12 col-md-4 d-flex justify-content-center align-items-center rightBox d-flex p-0 m-0`} id='rightBox'>
                <h1 src="/imgs/number.png" className={`${styles.h1} number2 img-under`}>02</h1>
                <img src="/imgs/foodwhite.png" className={`${styles.img} ${styles.imgleft} img-fluid img-upper `} alt='Img'/>
        </div>
    </div>
  )
}
