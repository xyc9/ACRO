
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Pagination, Navigation} from 'swiper'
import slideSimpleImg from '../../img/slides/discountSiderSimpleImg.jpg'
import slideSimpleImgServices from '../../img/slides/servicesSiderSimpleImg.jpg'
import slideSimpleImgPartners from '../../img/slides/partnersSiderSimpleImg.jpg'
import slideSimpleImgTeam from '../../img/aboutImg2.jpg'

import 'swiper/swiper.scss';
import '../../sass/_simpleSlider.scss';
import {Link} from "react-router-dom";
import style from "../../cssModuls/Home.module.css";

SwiperCore.use([Pagination, Navigation]);

const SliderSimple = ({services, partners, team}) => {
    const slides = [];
    for (let i = 0; i < 10; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" className="sliderSimple">
                <figure className="sliderSimple-item">
                    <div className={team ? "sliderSimple-item__img sliderSimple-item__img--team" :  (partners ? "sliderSimple-item__img sliderSimple-item__img--partners" : "sliderSimple-item__img")}>
                        <img src={team ? slideSimpleImgTeam  : (services ? slideSimpleImgServices : (partners ? slideSimpleImgPartners : slideSimpleImg))} alt="" className="img"/>
                    </div>
                    {
                        team ? <></>
                            :
                            <figcaption className="sliderSimple-item__content ">
                                <div className="sliderSimple_text-side">
                                <div className={ partners ? "content-title content-title--dark" : "content-title" }>
                                    Переезд - бесплатно
                                </div>
                                { services ?
                                    <div className="hidden_block">
                                        <Link className={style.content_link} to="/services">
                                            Подробнее
                                        </Link>
                                    </div>
                                    :
                                    <div className={partners ? "content-text content-text--dark" : "content-text"}>
                                        Всего за полчаса мы бесплатно сделаем подборку офисов
                                        или коммерческой недвижимости
                                        в Москве по вашему запросу
                                        и пришлем лучшие варианты помещений на электронную почту или в любой мессенджер
                                    </div>
                                }
                                </div>
                            </figcaption>
                    }

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
            slidesPerView={5}
            breakpoints={{
                // when window width is >= 320px
                320: {
                    // width: 290,
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                // when window width is >= 768px
                768: {
                    // width: 768,
                    slidesPerView: 3,
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

export default SliderSimple;
