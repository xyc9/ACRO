import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {EffectFade, Navigation, Pagination} from 'swiper'
import slideBigImg from '../../img/slides/bigSiderSimpleImg.jpg'
import 'swiper/swiper.scss';
import '../../sass/_bigSlider.scss';
import style from './slider.module.css';

SwiperCore.use([Pagination, Navigation, EffectFade]);

const SliderBig = () => {
    const slides = [];

    for (let i = 0; i < 10; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li" className="sliderBig">
                <div className="sliderBig__wrapper">

                    <div className="sliderBig__content">
                        <div className={style.title}>
                            Наши
                            преимущества
                        </div>
                        <div className="sliderBig__text-side">
                            <div className="sliderBig__slide-name">
                                30 минут
                            </div>
                            <div className="content-text">
                                Всего за полчаса мы бесплатно сделаем подборку офисов
                                или коммерческой недвижимости в Москве по
                                вашему запросу и пришлем лучшие варианты
                                помещений на электронную почту или в любой
                                мессенджер. Всего за полчаса мы бесплатно
                                сделаем подборку офисов или коммерческой
                                недвижимости в Москве по вашему запросу и пришлем
                                лучшие варианты помещений на электронную почту или
                                в любой мессенджер
                            </div>
                        </div>
                        <div className="slider-swiper-attributes">
                            <button className="prev swiper-arr"/>
                            <div className="swiper-pagination"/>
                            <button className="next swiper-arr"/>
                        </div>
                    </div>
                    <div className="sliderBig__img">
                        <img src={slideBigImg} alt="" className="img"/>
                    </div>
                </div>
            </SwiperSlide>
        )
    }

    return <>
        <Swiper
            tag="section"
            // wrapperTag="ul"
            spaceBetween={20}
            pagination={{
                clickable: true,
                el: ".swiper-pagination",
                type: 'fraction',
            }}
            navigation={{
                prevEl: '.prev',
                nextEl: '.next',
            }}
            // effect="fade"
            // slidesPerColumn={1}
            // slidesPerView={2}
            // centeredSlides={true}
            // slidesPerView='auto'
            breakpoints={{
                // when window width is >= 320px
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                520: {
                    width: 350,
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                // when window width is >= 768px
                768: {
                    width: 750,
                    slidesPerView: 1,
                },
                1440: {
                    width: 1440,
                    slidesPerView: 1,
                }

            }}
        >
            {slides}

        </Swiper>
    </>;
};
export default SliderBig;
