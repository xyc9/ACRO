
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper'
import slidePopular from '../../img/slides/popularSlide.jpg'
import slideBC from '../../img/slides/sliderBCimg.jpg'
import 'swiper/swiper.scss';
import '../../sass/_sliderWithCards.scss';
import {Link} from "react-router-dom";


SwiperCore.use([Pagination, Navigation]);

const Slider = ({bc}) => {
    const slides = [];

    for (let i = 0; i < 10; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" className="sliderWithCards">
                <figure className="slider-item">
                    <div className="slider-item__head">
                        <a className="slider-item__head-title" href="#">Офисное помещение 182 кв.м</a>
                        <div className="description">
                            <svg className="description-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M14 6.66699C14 11.3337 8 15.3337 8 15.3337C8 15.3337 2 11.3337 2 6.66699C2 5.07569 2.63214 3.54957 3.75736 2.42435C4.88258 1.29913 6.4087 0.666992 8 0.666992C9.5913 0.666992 11.1174 1.29913 12.2426 2.42435C13.3679 3.54957 14 5.07569 14 6.66699Z" stroke="#ADADAD" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8 8.66699C9.10457 8.66699 10 7.77156 10 6.66699C10 5.56242 9.10457 4.66699 8 4.66699C6.89543 4.66699 6 5.56242 6 6.66699C6 7.77156 6.89543 8.66699 8 8.66699Z" stroke="#ADADAD" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="description-text">Москва, ЦАО, Пресненский, Спи...</span>
                        </div>
                    </div>
                    <div className="slider-item__img">
                        <img className="img" src={bc ? slideBC : slidePopular} alt=""/>
                    </div>
                    <figcaption>
                        <ul className="slider-item__listAttributes">
                            <li className="slider-item__listAttributes-item slider-item__AttributesIcons">
                                <div className="attributeCard metro-attribute ">
                                    <span className="description-text">Баррикадная</span>
                                </div>
                            </li>
                            <li className="slider-item__listAttributes-item slider-item__AttributesIcons">
                                <div className="attributeCard walk-attribute ">
                                    <span className="description-text">5 мин</span>
                                </div>
                            </li>
                            <li className="slider-item__listAttributes-item slider-item__AttributesIcons">
                                <div className="attributeCard class-attribute ">
                                    <span className="description-text">Класс А</span>
                                </div>
                            </li>
                            <li className="slider-item__listAttributes-item slider-item__AttributesIcons">
                                <div className="attributeCard ifns-attribute ">
                                    <span className="description-text">ИФНС № 3</span>
                                </div>
                            </li>
                        </ul>
                    </figcaption>
                    <div className="slider-item__bottom">
                    {
                        bc ?
                            <Link className="btnCommon-alt" to='/catalog/Office'>
                                Подробнее
                            </Link>
                            :
                        <>
                            <strike>380 000 000 ₽</strike>
                            <span className="price">
                            250 000 000 ₽
                            </span>
                        </>
                    }
                    </div>
                </figure>
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
            grabCursor= { false }
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                // when window width is >= 320px
                320: {
                    width: 300,
                    slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                    width: 768,
                    slidesPerView: 2,
                },

               375: {
                    width: 320,
                    slidesPerView: 1,
                   centeredSlides: true,
                },

            }}
        >
            {slides}
            <div className="slider-swiper-attributes gallery-slider">
                <button className="prev swiper-arr" />
                <div className="swiper-pagination" />
                <button className="next swiper-arr" />
            </div>
        </Swiper>
    </>;
};
export default Slider;
