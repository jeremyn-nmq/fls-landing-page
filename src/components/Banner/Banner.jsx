import React, { useState } from 'react';
import originalTruck from '../../images/original-truck.png';
import slicedTruck from '../../images/sliced-truck.png';
import './Banner.scss';

const Banner = () => {
    const [showSlicedTruck, setShowSlicedTruck] = useState(false);
    const [truckMoved, setTruckMoved] = useState(false);

    const handleAreaClick = (e) => {
        e.preventDefault();
        setTruckMoved(true);
        setTimeout(() => {
            setShowSlicedTruck(true);
        }, 100);
    };

    const handleMouseLeave = (e) => {
        e.preventDefault();
        setShowSlicedTruck(false);
        setTimeout(() => {
            setTruckMoved(false);
        }, 100);
    };

    return (
        <div className="main-banner flex justify-center items-center relative" id="top-banner">
            <div className="main-banner-ground absolute"></div>
            <div className={`truck-container relative ${truckMoved ? 'move-left' : 'move-right'}`}>
                    <div className={!showSlicedTruck ? "opacity-100 w-100" : "opacity-0 w-0"}>
                        <img
                            className={`z-10 object-contain`}
                            src={originalTruck}
                            alt="original-truck"
                            id="originalTruck"
                        />
                        <div className="truck-overlay">
                            <div className="truck-area area-1">
                                <div className="truck-click-area" onClick={handleAreaClick}></div>
                            </div>
                            <div className="truck-area area-2">
                                <div className="truck-click-area" onClick={handleAreaClick}></div>
                            </div>
                            <div className="truck-area area-3">
                                <div className="truck-click-area" onClick={handleAreaClick}></div>
                            </div>
                            <div className="truck-area area-4">
                                <div className="truck-click-area" onClick={handleAreaClick}></div>
                            </div>
                        </div>
                    </div>
                    <div className={showSlicedTruck ? "opacity-100 w-100" : "opacity-0 w-0"}>
                        <img
                            className="z-10 object-contain"
                            src={slicedTruck}
                            alt="sliced-truck"
                            id="slicedTruck"
                        />
                        <div className="truck-overlay" onMouseLeave={handleMouseLeave}>
                            <div className="truck-area area-1 bg-black" onMouseEnter={() => console.log("a")}>
                            </div>
                            <div className="truck-area area-2 bg-red-50" onMouseEnter={() => console.log("b")}>
                            </div>
                            <div className="truck-area area-3 bg-yellow-50" onMouseEnter={() => console.log("c")}>
                            </div>
                            <div className="truck-area area-4 bg-blue-50" onMouseEnter={() => console.log("d")}>
                            </div>
                        </div>
                    </div>
                </div>
            <div></div>
        </div>
    );
};

export default Banner;
