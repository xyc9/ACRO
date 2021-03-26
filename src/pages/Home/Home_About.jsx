import {Link} from "react-router-dom";
import kirill from "../../img/kirill.jpg";
import kirillMark from "../../img/kirillMark.svg";
import React from "react";
import style from '../../cssModuls/Home.module.css';

const HomeAbout = () => {
    return (
        <section className={style.section__home_about}>
            <div className="title title-mark">О Нас</div>
            <div className={style.home_about}>
                <div className="about_block">
                    <div className={style.content}>
                        ACRE является компанией полного цикла в сфере коммерческой недвижимости.
                        Мы представляем как интересы собственников/арендодателей
                        по вопросам маркетинга, сдачи в аренду или продажи зданий,
                        так и интересы потенциальных арендаторов/покупателей.<br/>
                        <br/>
                        Благодаря большому опыту и знанию рынка мы обеспечиваем
                        своих клиентов самой точной и актуальной информацией,
                        которая служит основой для принятия оптимального и
                        своевременного решения.<br/>
                        <br/>
                        Следуя профессиональным нормам,
                        мы ценим время своих клиентов, соблюдая конфиденциальность,
                        придерживаемся профессиональной ответственности, и стараемся
                        соответствовать стандартам индустрии недвижимости и компетентности в своей работе.
                    </div>

                </div>

                <figure className={style.about__picture}>
                    <div className="about__picture-img">
                        <img src={kirill} alt="" className="img"/>
                    </div>
                    <figcaption>
                        <div className="about__picture-text">
                            Федоров Кирилл Александрович
                        </div>
                        <div className="about__picture-description">
                            Генеральный директор компании ACRE
                        </div>
                        <div className="about__picture-mark">
                            <img className="img" src={kirillMark} alt=""/>
                        </div>
                    </figcaption>
                </figure>
                <div className="about__block">

                    <div className={style.content}>
                        Команда cтратегического консалтинга ACRE предлагает
                        различные продукты и услуги для инвесторов и банков,
                        девелоперов и собственников, государственных организаций
                        и конечных пользователей.<br/>
                        <br/>
                        Ежегодно наша команда ведет
                        переговоры относительно сдачи в аренду или продажи десятков
                        тысяч квадратных метров офисных помещений.<br/>
                        <br/>
                        В сфере коммерческой
                        недвижимости наши специалисты имеют большой профессиональный
                        опыт работы как с российскими, так и европейскими компаниями.
                    </div>

                    <Link to="/about" className="btnCommon-alt">Подробнее</Link>
                </div>

            </div>
        </section>
    );
}
export default HomeAbout;