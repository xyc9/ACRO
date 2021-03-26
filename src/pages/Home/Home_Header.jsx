import {Filter, MenuTrigger} from "../../partials";
import style from "../../cssModuls/Home.module.css";
import {Link} from "react-router-dom";
import React from "react";
const HomeHeader = () =>{
    return(
        <section className="preview section">
            <MenuTrigger/>
            <div className={style.wrapper}>
                <div className="title">
                    ACRE
                </div>
                <div className="subtitle">
                    Коммерческая<br/>
                    недвижимость<br/>
                    в Москве
                </div>
            </div>
            <Filter/>
            <Link to='/catalog' className="btnCommon--gold btnAnimate header__button">Оставить заявку</Link>
        </section>
    );
}
export default HomeHeader;