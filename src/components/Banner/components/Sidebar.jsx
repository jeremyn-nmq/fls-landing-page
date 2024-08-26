import React, { useEffect, useState } from 'react';

const Sidebar = ({ images, isVisible }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (images.length > 0) {
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
            }, 500); // Duration of the slide-in-right animation
        }
    }, [images]);

    return (
        <div className={`sidebar ${isVisible ? 'slide-in' : 'slide-out'}`}>
            <div className={`image-container-slide flex justify-center align-middle ${animate ? 'slide-in-right' : ''}`}>
                <div className="image-container flex flex-col gap-5 justify-center align-middle">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`mock-${index}`} className="sidebar-image" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
