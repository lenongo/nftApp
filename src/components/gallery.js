import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl1 from '../public/girl1.jpg';
import girl2 from '../public/girl2.jpg';
import girl3 from '../public/girl3.jpg';
import girl4 from '../public/girl4.jpg';
import girl5 from '../public/girl5.jpg';
import girl6 from '../public/girl6.jpg';
import girl7 from '../public/girl7.jpg';
import girl8 from '../public/girl8.jpg';
import girl9 from '../public/girl9.jpg';
import girl10 from '../public/girl10.jpg';

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
        { title: "001", img: girl1 },
        { title: "002", img: girl2 },
        { title: "003", img: girl3 },
        { title: "004", img: girl4 },
        { title: "005", img: girl5 },
        { title: "006", img: girl6 },
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