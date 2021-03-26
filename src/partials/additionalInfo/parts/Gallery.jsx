import React from 'react';
import img from '../../../img/slides/additionalInfoGalleryImg.jpg'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper.scss';
import SwiperCore, {Navigation} from "swiper";


SwiperCore.use([Navigation]);


const Gallery = (props) => {
    // const slides = [];
    // for (let i = 0; i < 10; i++) {
    //     slides.push(
    //         <SwiperSlide key={`${i}`} tag="li" className="AdditionalInfo__content-gallery">
    //             <div className="gallery__wrapper">
    //                 <img className="gallery__img" src={img} alt=""/>
    //             </div>
    //         </SwiperSlide>
    //     )
    // }

    return <>
        {/*<div className="title">*/}
        {/*    Фотографии БЦ «Ринг Парк»*/}
        {/*</div>*/}
        {/*<Swiper*/}
        {/*    tag="section"*/}
        {/*    wrapperTag="ul"*/}
        {/*    navigation={{*/}
        {/*        prevEl: '.prev',*/}
        {/*        nextEl: '.next',*/}
        {/*    }}*/}
        {/*    slidesPerView={5}*/}
        {/*    breakpoints={{*/}
        {/*        320: {*/}
        {/*            slidesPerView: 1,*/}
        {/*        },*/}
        {/*        568: {*/}
        {/*            slidesPerView: 2,*/}
        {/*        },*/}
        {/*        768: {*/}
        {/*            slidesPerView: 3,*/}
        {/*        },*/}
        {/*        1200: {*/}
        {/*            slidesPerView: 4,*/}
        {/*        },*/}
        {/*        1440: {*/}
        {/*            slidesPerView: 5,*/}
        {/*        },*/}
        {/*    }}*/}
        {/*>*/}
        {/*    {slides}*/}
        {/*    <button className="prev gallery__arr" />*/}
        {/*    <button className="next gallery__arr" />*/}
        {/*</Swiper>*/}
    </>;
};


export default Gallery;
