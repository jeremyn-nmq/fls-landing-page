import React, { useEffect, useState } from 'react';
import usePrevious from "../../../utils/hooks/usePrevious";
import {arrayIsEqual} from "../../../utils/ultil";

const Sidebar = (props) => {
    const { images=[], isVisible = false } = props
    const previousStates = usePrevious({ images, isVisible })
    const [animate, setAnimate] = useState(false);
    const [prevImages, setPrevImages] = useState([])
    useEffect(() => {
        if (images.length > 0) {
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
            }, 700); // Duration of the slide-in-right animation
        }

        if(previousStates?.images?.length > 0 && arrayIsEqual(previousStates?.images, images)){
            setPrevImages(previousStates?.images)
        }
    }, [images]);

    useEffect(() => {
        setAnimate(false);
        setPrevImages([])
    }, [isVisible])

    return (
        <div className={`sidebar ${isVisible ? 'slide-in' : 'slide-out'}`}>
            <div className={`image-container-slide z-10 flex justify-center align-middle ${animate ? 'slide-in-right' : ''}`}>
                <div className="image-container flex flex-col gap-5 justify-center align-middle">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`mock-${index}`} className="sidebar-image" />
                    ))}
                </div>
            </div>
            { prevImages.length >0 && (
                <div
                    className={`image-container-slide flex justify-center align-middle ${animate ? 'slide-out-right' : ''}`}>
                    <div className="image-container flex flex-col gap-5 justify-center align-middle">
                        {prevImages.map((image, index) => (
                            <img key={index} src={image} alt={`mock-${index}`} className="sidebar-image"/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
