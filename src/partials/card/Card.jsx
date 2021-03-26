import React  from 'react';
import {Link} from "react-router-dom";

import '../../sass/_card.scss'

import img from "../../img/slides/imgSiderAdvantages.jpg";
import { ContactMap, ShowMapCard } from '../../partials'
import {useSelector} from "react-redux";


const Card = ({servicesSingle, catalog, elem, slug, business_id}) => {
    const mapActions = useSelector(state => state.map.activeMap);



    return <>
        <div className="Card">
            <div className="Card__img">
                <img className="img" src={img} alt=""/>
                {
                    servicesSingle || catalog ?
                        <div className="mark">А</div>
                        : <></>
                }
            </div>
            <div className="Card__content">
                {
                    servicesSingle || catalog ?
                        <>
                            <div className="Card__wrapper">
                                <div className="Card__wrapper-header">
                                    <div className="head">
                                        <div className="content-title">
                                            {
                                                elem?.name
                                            }
                                        </div>
                                        <div className="content-rating Card__AttributesIcons">
                                            <div className="text class-attribute">
                                                Класс А
                                            </div>
                                        </div>
                                    </div>
                                    {
                                         elem && <ShowMapCard elemId={elem.id} elemIsOpen={elem.isOpenMap} />
                                    }
                                    <ul className="head">
                                        <li className="Card__AttributesIcons">
                                            <div className="attributeCard metro-attribute">
                                                <span className="description-text">Баррикадная</span>
                                            </div>
                                        </li>
                                        <li className="Card__AttributesIcons">
                                            <div className="attributeCard walk-attribute">
                                                <span className="description-text">5 мин</span>
                                            </div>
                                        </li>
                                        <li className="Card__AttributesIcons">
                                            <div className="attributeCard ifns-attribute">
                                                <span className="description-text">ИФНС № 3</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {
                                    !catalog ?
                                        <>
                                            <div className="Card__wrapper-content">
                                                <div className="content-subtitle">История подбора</div>
                                                <div className="content-text">
                                                    Офис класса А, расположенный в новом высотном здании в центральном деловом районе города Москва. Здание находится с хорошим транспортным сообщением. Недалеко от здания находятся основные объекты инфраструктуры и зоны отдыха.
                                                    Помещение офиса имеет ремонт в соответствии с высокими стандартами качества.
                                                </div>
                                            </div>
                                            <div className="Card__wrapper-bottom">
                                                <div className="description">
                                                    Это мог бы быть ваш офис
                                                </div>
                                                <Link to="/catalog"  className="link btnCommon-alt">В каталог</Link>
                                            </div>
                                        </>
                                        : <>
                                            <div className="Card__wrapper-table">
                                                <div className="table__head">
                                                    <div className="table__head-item content-subtitle">Площадь</div>
                                                    <div className="table__head-item content-subtitle">руб. в месяц</div>
                                                    <div className="table__head-item content-subtitle hiddenMobile">Этаж</div>
                                                    <div className="table__head-item content-subtitle hiddenMobile">Состояние</div>
                                                </div>
                                                <ul className="table__list">
                                                    <li className="table__list-item">
                                                        <div className="item-attribute">
                                                            <Link to={slug} className="description-text">15.68 кв.м</Link>
                                                        </div>
                                                        <div className="item-attribute">
                                                            <span className="description-text">48 347</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">51</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">С отделкой</span>
                                                        </div>
                                                    </li>
                                                    <li className="table__list-item">
                                                        <div className="item-attribute">
                                                            <Link to={slug} className="description-text">15.68 кв.м</Link>
                                                        </div>
                                                        <div className="item-attribute">
                                                            <span className="description-text">48 347</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">51</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">С отделкой</span>
                                                        </div>
                                                    </li>
                                                    <li className="table__list-item">
                                                        <div className="item-attribute">
                                                            <Link to={slug} className="description-text">15.68 кв.м</Link>
                                                        </div>
                                                        <div className="item-attribute">
                                                            <span className="description-text">48 347</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">51</span>
                                                        </div>
                                                        <div className="item-attribute hiddenMobile">
                                                            <span className="description-text">С отделкой</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="Card__wrapper-bottom">
                                                <Link to={business_id} className="link btnCommon-alt">Подробнее</Link>
                                            </div>
                                        </>
                                }

                            </div>
                        </>
                        : <>
                            <div className="content-title">Преимущество №1</div>
                            <div className="content-subtitle">Принцип эффективного сотрудничества</div>
                            <div className="content-text">
                                Защищая интересы каждого клиента, ACRE использует только
                                эффективные решения и нестандартные пути для достижения поставленных целей.
                                Важное преимущество поиска помещения с нами – разнообразие вариантов,
                                выгодные условия и приемлемый ценовой диапазон.
                                Основой для принятия эффективного и оптимального решения служит
                                информация, которой мы обеспечиваем своих клиентов, опираясь на
                                большой опыт и знание современной рыночной системы.
                            </div>
                        </>
                }
            </div>
        </div>
        {
            elem && elem.isOpenMap ? <ContactMap isbc={true} elemId={elem.id}/> : <></>
        }
    </>

};


export default Card;
