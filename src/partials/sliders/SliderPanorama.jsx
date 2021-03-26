import React from 'react';
import 'swiper/swiper.scss';
import '../../sass/_sliderPanorama.scss';
import img from '../../img/slides/sliderPanaramaImg.jpg'
import SwiperCore, {Pagination, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
import style from '../../cssModuls/Officesingle.module.css'
SwiperCore.use([Pagination, Navigation]);



const SliderPanorama = (props) => {
    const slides = [];
    for (let i = 0; i < 10; i++) {
        slides.push(
            <SwiperSlide key={`${i}`} tag="li" className="sliderPanorama">
                <div className="sliderPanorama__wrapper">
                    <img className="sliderPanorama__img" src={img} alt=""/>
                </div>
            </SwiperSlide>
        )
    }

    return <>
        <Swiper
            tag="section"
            wrapperTag="ul"
            centeredSlides={true}
            pagination={{ clickable: true, el: ".swiper-pagination", }}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next',
            }}
            slidesPerView={1}
        >
            {slides}
            <div className="slider-swiper-attributes">
                <button className="prev swiper-arr" />
                <div className="swiper-pagination" />
                <button className="next swiper-arr" />
            </div>
        </Swiper>
    </>;
};


export default SliderPanorama;
