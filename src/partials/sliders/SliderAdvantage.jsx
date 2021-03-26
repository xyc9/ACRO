import React from 'react';
import SwiperCore, {Pagination, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";


import Card from "../card/Card";


SwiperCore.use([Pagination, Navigation]);

const SliderAdvantage = ({servicesSingle, arr}) => {
    const slides = [];
    for (let i = 0; i < 10; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" className="sliderAdvantages">
                <Card servicesSingle={servicesSingle}/>
            </SwiperSlide>
        )
    }

    return <>
        <Swiper
            tag="section"
            wrapperTag="ul"
            spaceBetween={20}
            pagination={{ clickable: true, el: ".swiper-pagination", }}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next',
            }}
            slidesPerView={1}
        >
            {
                arr ?
                    arr.map((item,index) => {
                        return (
                            <SwiperSlide key={`slide-${item.id}_${index}`} tag="li" className="sliderAdvantages">
                                <Card servicesSingle={servicesSingle} elem={item}/>
                            </SwiperSlide>
                        )
                    })
               :
                slides
            }
            <div className="slider-swiper-attributes">
                <button className="prev swiper-arr" />
                <div className="swiper-pagination" />
                <button className="next swiper-arr" />
            </div>
        </Swiper>
    </>;
};



export default SliderAdvantage;
