import React, { useState, useEffect } from 'react';
import originalTruck from '../../images/original-truck.png';
import originalTruckTranslated from '../../images/original-truck-translated.png';
import slicedTruck from '../../images/sliced-truck.png';
import slicedTruckTranslated from '../../images/sliced-truck-translated.png';
import flag1 from '../../images/flag1.png';
import flag2 from '../../images/flag2.png';
import flag3 from '../../images/flag3.png';
import flag4 from '../../images/flag4.png';
import './Banner.scss';
import Sidebar from "./components/Sidebar";
import {useI18next} from "gatsby-plugin-react-i18next";

// Mock image data
const mockImages = {
    area1: [flag1, flag1, flag1],
    area2: [flag2, flag2, flag2],
    area3: [flag3, flag3, flag3],
    area4: [flag4, flag4, flag4],
};

const Banner = () => {
    const [showSlicedTruck, setShowSlicedTruck] = useState(false);
    const [truckMoved, setTruckMoved] = useState(false);
    const [activeImages, setActiveImages] = useState(mockImages.area1);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [originalTruckSrc, setOriginalTruckSrc] = useState(originalTruck);
    const [slicedTruckSrc, setSlicedTruckSrc] = useState(originalTruck);
    const { language} = useI18next();

    useEffect(() => {
        setOriginalTruckSrc(language === "en" ? originalTruck : originalTruckTranslated)
        setSlicedTruckSrc(language === "en" ? slicedTruck : slicedTruckTranslated)
    }, [language])

    const handleAreaClick = (e) => {
        e.preventDefault();
        const areaId = e.currentTarget.id;
        setTruckMoved(true);
        setActiveImages(mockImages[areaId]);
        setTimeout(() => {
            setShowSlicedTruck(true);
            setSidebarVisible(true);
        }, 100);
    };

    const handleMouseLeave = (e) => {
        e.preventDefault();
        setShowSlicedTruck(false);
        setSidebarVisible(false);
        setTimeout(() => {
            setTruckMoved(false);
        }, 100);
    };

    const handleHoverArea = (areaId) => {
        setActiveImages(mockImages[areaId]);
    };

    return (
        <div className="main-banner flex justify-center items-center relative" id="top-banner">
            <div className="main-banner-ground absolute"></div>
            <div className={`truck-container relative ${truckMoved ? 'move-left' : 'move-right'}`}>
                <div className={!showSlicedTruck ? "opacity-100 w-100" : "opacity-0 w-0"}>
                    <img
                        className="z-10 object-contain"
                        src={originalTruckSrc}
                        alt="original-truck"
                        id="originalTruck"
                    />
                    <div className="truck-overlay">
                        <div className="truck-area area-1">
                            <div id="area1" className="truck-click-area" onClick={handleAreaClick}></div>
                        </div>
                        <div className="truck-area area-2">
                            <div id="area2" className="truck-click-area" onClick={handleAreaClick}></div>
                        </div>
                        <div className="truck-area area-3">
                            <div id="area3" className="truck-click-area" onClick={handleAreaClick}></div>
                        </div>
                        <div className="truck-area area-4">
                            <div id="area4" className="truck-click-area" onClick={handleAreaClick}></div>
                        </div>
                    </div>
                </div>
                <div className={showSlicedTruck ? "opacity-100 w-100" : "opacity-0 w-0"}>
                    <img
                        className="z-10 object-contain slicedTruck"
                        src={slicedTruckSrc}
                        alt="sliced-truck"
                        id="slicedTruck"
                    />
                    <div className="truck-overlay" onMouseLeave={handleMouseLeave}>
                        <div className="truck-area hover-area area-1" onMouseEnter={() => handleHoverArea('area1')}></div>
                        <div className="truck-area hover-area area-2" onMouseEnter={() => handleHoverArea('area2')}></div>
                        <div className="truck-area hover-area area-3" onMouseEnter={() => handleHoverArea('area3')}></div>
                        <div className="truck-area hover-area area-4" onMouseEnter={() => handleHoverArea('area4')}></div>
                    </div>
                </div>
            </div>
            <Sidebar images={activeImages} isVisible={sidebarVisible} />
        </div>
    );
};

export default Banner;
