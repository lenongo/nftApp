import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl4 from '../public/girl4.jpg';
import girl7 from '../public/girl7.jpg';
import girl9 from '../public/girl9.jpg';

import '../styles/gallery.css';
import '../styles/App.css';

const gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow: true,
    };

    const items = [
        { title: "000", img: girl7 },
        { title: "001", img: girl9 },
        { title: "002", img: girl4 }
    ]
    return (
        <div className='gallery-container' id='gallery-container'>
            <p className='gallery-explain'>Our NFT</p>
            <Slider {...settings}>
                {items && items.map(item => {
                    return (
                        <div className='gallery'>
                            <img className = 'gallery-img' src={item.img} />
                            <p className='gallery-name'>{item.title}</p>
                        </div>
                    )
                })}
            </Slider>
        </div>

    )
}

export default gallery