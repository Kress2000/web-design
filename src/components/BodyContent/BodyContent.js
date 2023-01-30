import React from 'react';
import "./BodyContent.scss";

export default function BodyContent() {
  return (
    <div className='container-fluid bodyContainer p-0 pt-xxl-5 row bg-none'>
        <div className='col-12 col-md-6 col-lg-4 fisrtBox'>
            <p className='text-xxm lorem'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus molestie massa,
                id vulputate mauris iaculis nec. Quisque elementum risus vel dui efficitur volutpat.
                In luctus quam nec sem euismod aliquam. Nullam commodo enim lorem, id ultrices elit mattis at. Nunc tellus augue.
            </p>
            <div className='imgBox'>
                <img src="/imgs/food-semired.png" className="img img-fluid" alt='Img'/>
            </div>
            <div className='loremTitleBox'>
                <p className='text-sm smallDetails m-0'>Lorem ipsum dolor sit amet, consectetur</p>
                <h1 className='title fw-bolder m-0'>Lorem ipsum</h1>
            </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4 middleBox d-flex justify-content-center p-0 align-items-center'>
        </div>
        <div className='col-12 col-md-6 col-lg-4 d-flex rightBox p-0' id='rightBox'>
                <img src="/imgs/number.png" className="img position-relative img-fluid img-under "  alt='Img'/>
                <img src="/imgs/foodwhite.png" className="img position-relative img-fluid img-upper " alt='Img'/>
        </div>
    </div>
  )
}
