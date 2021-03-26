import React from 'react';
import {Link} from "react-router-dom";
import style from '../../cssModuls/Home.module.css';
import img1 from '../../img/services/1.png'
import img2 from '../../img/services/2.png'


const HomeServices = () => {
    return (
        <section className={style.grid}>
            <div className={style.grid_item}>
                <img src={img1} alt=""/>
                <div className={style.text_side}>
                <span className="service_name">
                    Управление
недвижимостью
                </span>
                    <div className={style.hidden_block}>
                        <Link className={style.content_link} to="/services">
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.grid_item}>
                <img src={img2} alt=""/>
                <div className={style.text_side}>
                <span className="service_name">
                   Представление
интересов покупателя
                </span>
                    <div className={style.hidden_block}>
                        <Link className={style.content_link} to="/services">
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.grid_item}>
                <img src={img1} alt=""/>
                <div className={style.text_side}>
                <span className="service_name">
                   Рынки капитала
                </span>
                    <div className={style.hidden_block}>
                        <Link className={style.content_link} to="/services">
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.grid_item}>
                <img src={img1} alt=""/>
                <div className={style.text_side}>
                <span className="service_name">
                    Помещения от застройщиков
                </span>
                    <div className={style.hidden_block}>
                        <Link className={style.content_link} to="/services">
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.grid_item}>
                <img src={img2} alt=""/>
                <div className={style.text_side}>
                <span className="service_name">
                    Готовый арендный бизнес
                </span>
                    <div className={style.hidden_block}>
                        <Link className={style.content_link} to="/services">
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.grid_item}>
                <img src={img1} alt=""/>
                <div className={style.text_side}>
                <span className="service_name">
                    Дизайн и отделочные работы
                </span>
                    <div className={style.hidden_block}>
                        <Link className={style.content_link} to="/services">
                            Подробнее
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeServices;
