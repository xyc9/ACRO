import React from 'react';
import { Slider, SliderBig} from '../../partials'
import HomeServices from "./Home_services";
import HomeAbout from "./Home_About";
import HomeHeader from "./Home_Header";
import style from '../../cssModuls/Home.module.css';
import SliderSimple from "../../partials/sliders/SliderSimple";


const Home = () => {
    return <>
        <section className="home__header">
         <HomeHeader/>
        </section>
        <section className="advantages section">
            <div className={style.adaptive_title}>
                Наши
                преимущества
            </div>
            <SliderBig/>
        </section>
        <section className="services section">
            <div className="title title-mark">
                Услуги
            </div>
            <div className={style.adaptive_slider}>
            <SliderSimple services={true}/>
            </div>
            <HomeServices/>
        </section>

        <section className="Home_about">
            <HomeAbout/>
        </section>
        <section className="gallery">
            <div className="title title-mark">
                Популярные объекты
            </div>
            <Slider/>
        </section>
    </>
};


export default Home;

