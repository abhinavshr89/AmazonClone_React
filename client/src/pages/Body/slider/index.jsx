import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/3000X1200_New_Launch_1stapr._CB561301598_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/Dec23/Shoes/EOSS/Unrec/Bob/Sports/3000._CB581991812_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img22/march/brands/GW/Under_1499_Tallhero_3000x1200._CB561212093_.jpg",
        "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/hsbcunrec/MA_2x._CB580708889_.jpg",
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="image-container">
            <div className="fading-div">
            <div className="image-btn-container">
                <button className="slider-btn" onClick={prevSlide}><FontAwesomeIcon icon={faAngleLeft} /></button>
                <button className="slider-btn" onClick={nextSlide}><FontAwesomeIcon icon={faChevronRight} /></button>
            </div>
            </div>
            <div className="image-list" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image} alt="" />
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default Slider;
