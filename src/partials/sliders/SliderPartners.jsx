import React from 'react';
import '../../sass/_sliderPartners.scss'
import SwiperCore, {Pagination, Navigation} from 'swiper'
import {Swiper, SwiperSlide} from "swiper/react";
import img from "../../img/slides/partnersSliderPartnersImg.jpg";


SwiperCore.use([Pagination, Navigation]);

const SliderPartners = (props) => {
    const slides = [];
    for (let i = 0; i < 10; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" className="sliderPartners">
                <div className="sliderPartner__img">
                    <img className="img" src={img} alt=""/>
                </div>
            </SwiperSlide>
        )
    }

    return <>
        <Swiper
            tag="section"
            wrapperTag="ul"
            spaceBetween={30}
            pagination={{ clickable: true, el: ".swiper-pagination", }}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next',
            }}
            slidesPerView={4}
            breakpoints={{
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 2,
                },
            }}
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



export default SliderPartners;
