import React from 'react';
import styles from './BodyContent.module.scss';

export default function BodyContent() {
  return (
    <>
        <div className={`container-fluid mt-4 p-0 row bg-none d-none d-md-flex ${styles.bodyContainer}`}>
            <div className={`col-12 col-md-4 ${styles.fisrtBox} ${styles.boxBody} d-flex flex-column p-0 m-0`}>
                <p className={`${styles.p} text-sm lorem`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus molestie massa,
                    id vulputate mauris iaculis nec. Quisque elementum risus vel dui efficitur volutpat.
                </p>
                <div className='imgBox'>
                    <img src="/imgs/food-semired.png" className={`${styles.img} ${styles.imgL} img-fluid`} alt='Img'/>
                </div>
                <div className={styles.loremTitleBox}>
                    <p className={`text-sm ${styles.smallDetails} m-0`}>Lorem ipsum dolor sit amet, consectetur</p>
                    <h1 className={`${styles.title} fw-bolder m-0`}>Lorem ipsum</h1>
                </div>
            </div>
            <div className={`col-12 col-md-4 ${styles.middleBox} ${styles.middleBoxLG} ${styles.boxBody} p-0 m-0`}>
            </div>
            <div className={`col-12 col-md-4 d-flex justify-content-center align-items-center ${styles.rightBox} ${styles.boxBody} d-flex p-0 m-0`}>
                    <h1 src="/imgs/number.png" className={`${styles.h1Number} img-under`}>02</h1>
                    <img src="/imgs/foodwhite.png" className={`${styles.img} ${styles.imgleft} img-fluid img-upper `} alt='Img'/>
            </div>
        </div>
        {/* SMALLER DEVICES MD TABLETS */}
        <div className={`bg-warning container-fluid mt-3 d-flex d-md-none d-flex flex-column p-0 row bg-none ${styles.bodyContainer}`}>
            <p className={`${styles.p} text-sm lorem col-8`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus molestie massa,
                id vulputate mauris iaculis nec. Quisque elementum risus vel dui efficitur volutpat.
            </p>
            <div className={`col-12 ${styles.middleBox} ${styles.middleBoxMD} p-0 m-0`}>
            </div>
            <div className={`col-12 d-flex justify-content-center align-items-center ${styles.twopicsBox} bg-secondary`}>
                <div className='imgBox w-100'>
                        <img src="/imgs/food-semired.png" className={`${styles.img} ${styles.imgLeft} img-fluid`} alt='Img'/>
                </div>
                <div className='numberPicBox'>
                    <h1 src="/imgs/number.png" className={`${styles.h1Number} img-under`}>02</h1>
                    <img src="/imgs/foodwhite.png" className={`${styles.img} ${styles.imgRight} img-fluid img-upper `} alt='Img'/>
                </div>
            </div>
            <div className={`${styles.loremTitleBox} col-12`}>
                    <p className={`text-sm ${styles.smallDetails} m-0`}>Lorem ipsum dolor sit amet, consectetur</p>
                    <h1 className={`${styles.title} fw-bolder m-0`}>Lorem ipsum</h1>
            </div>
        </div>
    </>
  )
}
