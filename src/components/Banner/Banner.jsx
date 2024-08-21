import React from 'react';
import originalTruck from '../../images/original-truck.png';
import slicedTruck from '../../images/sliced-truck.png';
import "./Banner.scss"

const Banner = () => {
    return (
        <div className="main-banner flex justify-center items-center position relative">
            <div className="main-banner-ground absolute"></div>
            <div className="main-banner-headers absolute">
                <h2 className="uppercase">Your <br/> "Freezy" Goods</h2>
                <h1 className="uppercase">Guardian</h1>
            </div>
            <img className="h-full z-10 object-contain" src={originalTruck} alt="original-truck" id="originalTruck"/>
            {/*<img src={slicedTruck} alt="original-truck"></img>*/}
        </div>
    )
}

export default Banner;
 
