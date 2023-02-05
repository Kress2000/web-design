import React from 'react';
import styles from './BodyContent.module.scss';

export default function BodyContent() {
  return (
    <>
        <div className={`container-fluid mt-4 p-0 row bg-none d-none d-md-flex align-items-start ${styles.bodyContainer}`}>
            <div className={`col-4 ${styles.fisrtBox} ${styles.bodyBox} d-flex flex-column justify-content-between p-0 m-0`}>
                <p className={`${styles.p} text-sm lorem`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus molestie massa,
                    id vulputate mauris iaculis nec. Quisque elementum risus vel dui efficitur volutpat!
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus molestie massa.
                </p>
                <div className={styles.imgBox}>
                    <img src="/imgs/food-semired.png" className={`${styles.img} ${styles.imgLeft} img-fluid`} alt='Img'/>
                </div>
                <div className={styles.loremTitleBox}>
                    <p className={`text-sm ${styles.smallDetails} m-0`}>Lorem ipsum dolor sit amet, consectetur</p>
                    <h1 className={`${styles.title} m-0`}>Lorem ipsum</h1>
                </div>
            </div>
            <div className={`col-4 ${styles.middleBox} ${styles.bodyBox} p-0 m-0`}>
            </div>
            <div className={`col-4 d-flex justify-content-center align-items-center ${styles.rightBox} ${styles.bodyBox} d-flex p-0 m-0`}>
                    <h1 src="/imgs/number.png" className={`${styles.h1Number} img-under`}>02</h1>
                    <img src="/imgs/foodwhite.png" className={`${styles.img} ${styles.imgRight} img-fluid`} alt='Img'/>
            </div>
        </div>
        {/* SMALLER DEVICES MD TABLETS */}
        <div className={`container-fluid mt-3 d-flex d-md-none d-flex flex-column justify-content-start p-0 row ${styles.bodyContainer}`}>
            <p className={`${styles.p} text-sm lorem col-8 col-sm-6`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus molestie massa,
                id vulputate mauris iaculis nec. Quisque elementum risus vel dui efficitur volutpat.
            </p>
            <div className={`col-12 ${styles.middleBox} p-0 m-0 mt-4`}>
            </div>
            <div className={`${styles.bodyBottom} d-flex flex-column`}>
                <div className={`col-12 d-flex justify-content-center align-items-center ${styles.twopicsBox} w-100 m-0 p-0`}>
                    <div className='imgBox w-100'>
                            <img src="/imgs/food-semired.png" className={`${styles.img} ${styles.imgLeft} img-fluid`} alt='Img'/>
                    </div>
                    <div className='numberPicBox d-flex position-relative m-0 p-0'>
                        <h1 src="/imgs/number.png" className={`${styles.h1Number} img-under`}>02</h1>
                        <img src="/imgs/foodwhite.png" className={`${styles.img} ${styles.imgRight} img-fluid position-absolute `} alt='Img'/>
                    </div>
                </div>
                <div className={`${styles.loremTitleBox} col-12`}>
                        <p className={`text-sm ${styles.smallDetails} m-0`}>Lorem ipsum dolor sit amet, consectetur</p>
                        <h1 className={`${styles.title} fw-bolder m-0`}>Lorem ipsum</h1>
                </div>
            </div>
        </div>
    </>
  )
}
