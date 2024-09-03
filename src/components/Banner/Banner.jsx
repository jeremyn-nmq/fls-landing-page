import React, { useState, useEffect } from 'react';
import originalTruck from '../../images/original-truck.png';
import originalTruckTranslated from '../../images/original-truck-translated.png';
import slicedTruck from '../../images/sliced-truck.png';
import slicedTruckTranslated from '../../images/sliced-truck-translated.png';
import './Banner.scss';
import Sidebar from "./components/Sidebar";
import {useI18next} from "gatsby-plugin-react-i18next";
import useMatchMedia from "../../utils/hooks/useMatchMedia";
import Modal from "./components/Modal";
import {MOCK_BANNER_IMGS} from "../../utils/data";

const Banner = () => {
    const [showSlicedTruck, setShowSlicedTruck] = useState(false);
    const [truckMoved, setTruckMoved] = useState(false);
    const [activeImages, setActiveImages] = useState(MOCK_BANNER_IMGS.area1);
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const [originalTruckSrc, setOriginalTruckSrc] = useState(originalTruck);
    const [slicedTruckSrc, setSlicedTruckSrc] = useState(originalTruck);
    const { language} = useI18next();

    const isMobileResolution = useMatchMedia('(max-width: 720px)', true)

    useEffect(() => {
        setOriginalTruckSrc(language === "en" ? originalTruck : originalTruckTranslated)
        setSlicedTruckSrc(language === "en" ? slicedTruck : slicedTruckTranslated)
    }, [language])

    const handleAreaClick = (e) => {
        e.preventDefault();
        const areaId = e.currentTarget.id;
        setTruckMoved(true);
        setActiveImages(MOCK_BANNER_IMGS[areaId]);
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
        setActiveImages(MOCK_BANNER_IMGS[areaId]);
    };

    return (
        <div className="main-banner flex justify-center items-center relative" id="top-banner">
            {
                isMobileResolution ? (
                    <>

                        <h2 data-modal-target="static-modal" data-modal-toggle="static-modal">Mobile</h2>
                        <Modal/>
                    </>
                ) : (
                    <>
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
                                    <div className="truck-area hover-area area-1"
                                         onMouseEnter={() => handleHoverArea('area1')}></div>
                                    <div className="truck-area hover-area area-2"
                                         onMouseEnter={() => handleHoverArea('area2')}></div>
                                    <div className="truck-area hover-area area-3"
                                         onMouseEnter={() => handleHoverArea('area3')}></div>
                                    <div className="truck-area hover-area area-4"
                                         onMouseEnter={() => handleHoverArea('area4')}></div>
                                </div>
                            </div>
                        </div>
                        <Sidebar images={activeImages} isVisible={sidebarVisible}/>
                    </>
                )
            }

        </div>

    );
};

export default Banner;
