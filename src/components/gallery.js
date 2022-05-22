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
        { title: "name1", img: girl1 },
        { title: "name2", img: girl2 },
        { title: "name3", img: girl3 },
        { title: "name4", img: girl4 },
        { title: "name5", img: girl5 },
        { title: "name6", img: girl6 },
    ]
    return (
        <div className='gallery-container' id='gallery-container'>
            <Slider {...settings}>
                {items && items.map(item => {
                    return (
                        <div className='gallery'>
                            <p className='gallery-explain'>Our NFT</p>
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