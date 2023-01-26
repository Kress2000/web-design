import React from 'react';
import "./BodyContent.scss";
import ImgLeft from "../Assets/imgs/food-semired.png";
import MiddleImg from "../Assets/imgs/foodmeal.png";
import NumberImg from "../Assets/imgs/number.png";
import FoodWhite from "../Assets/imgs/foodwhite.png";

export default function BodyContent() {
  return (
    <div className='container-fluid p-0 row bg-none'>
        <div className='col-12 col-md-6 col-lg-4'>
            <p className='text-xxm lorem'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus molestie massa,
                id vulputate mauris iaculis nec. Quisque elementum risus vel dui efficitur volutpat.
                In luctus quam nec sem euismod aliquam. Nullam commodo enim lorem, id ultrices elit mattis at. Nunc tellus augue,
                consequat et porta non, venenatis a augue. Cras molestie dui ut sodales vestibulum. Vivamus porttitor auctor tortor,
                nec varius tortor egestas sed. Aenean metus tellus, semper id pellentesque vel, condimentum a elit.
            </p>
            <div className='imgBox'>
                <img src={ImgLeft} className="img img-fluid" width="150" height="150"/>
            </div>
            <div className='loremTitleBox'>
                <p className='text-sm smallDetails m-0'>Lorem ipsum dolor sit amet, consectetur</p>
                <h1 className='title fw-bolder m-0'>Lorem ipsum</h1>
            </div>
        </div>
        <div className='col-12 col-md-6 col-lg-4 middleBox d-flex justify-content-center align-items-center'>
            <img  src={MiddleImg} className="img img-fluid"/>

        </div>
        <div className='col-12 col-md-6 col-lg-4 rightBox p-0'>
            <div className='position-relative d-flex align-items-lg-center w-100 h-100 m-0 innerBox '>
                <img src={NumberImg} className="img img-fluid img-under position-absolute" width="150" height="150"/>
                <img src={FoodWhite} className="img img-fluid img-upper position-absolute" width="150" height="150"/>
            </div>
        </div>
    </div>
  )
}
 