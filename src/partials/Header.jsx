import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import '../sass/_header.scss'
import {withRouter} from "react-router-dom";
import { Filter, MenuTrigger } from "./index";
import { showModal } from '../redux/actions'



const Header = ({location }) => {

    const dispatch = useDispatch();

    const textTitleHeader = {
        services: "Услуги компании",
        about: "О компании",
        partners: "Информация для партнеров",
        catalog: "Каталог бизнес-центров",
        BusinessCenter:"Бизнес-Центр",
        OfficeSingle : "Офис",
        wish: "Избранные объекты",
        rent: "Аренда Недвижимости",
        sell: "Продажа Недвижимости"
    };

    const description = useSelector(state=>state.description.description);

    const openModal = () => {
        dispatch(showModal());
    };


    return <>
        {
            location.pathname === '/' || location.pathname.includes('contacts') ? <></> :
                <header className={`${ location.pathname === '/catalog' || location.pathname.includes ('/rent') || location.pathname.includes ('/sell') ? 'header--filter' : ''  } header section`}>
                    <MenuTrigger />
                    <div className="header__title">
                        {
                            location.pathname === '/about' && textTitleHeader.about
                        }
                        {
                            location.pathname.includes('services') && textTitleHeader.services
                        }
                        {
                            location.pathname === '/partners' && textTitleHeader.partners
                        }
                        {
                            location.pathname === '/catalog' && textTitleHeader.catalog
                        }
                        {
                            location.pathname === '/wish' && textTitleHeader.wish
                        }
                        {
                            location.pathname.includes('/bc') && textTitleHeader.BusinessCenter
                        }

                        {
                            location.pathname.includes ('/office') && textTitleHeader.OfficeSingle
                        }
                        {
                            location.pathname.includes ('/rent') && textTitleHeader.rent
                        }
                        {
                            location.pathname.includes ('/sell') && textTitleHeader.sell
                        }
                        <div className="bc-title">
                        {

                            description? `    ${description}`: ''
                        }
                        </div>
                    </div>
                    <div className="header__content">
                        <div className="text">
                            Работа компании ACRE осуществляется
                            по принципам эффективности и результативности,
                            доверительного отношения и полной
                            конфиденциальности.
                        </div>
                        {
                            location.pathname === '/about' ||  location.pathname === '/services' ?
                                <></>
                                : <button className="btnCommon--gold btnAnimate" onClick={openModal}>Начать сотрудничество</button>
                        }
                    </div>
                    {
                        location.pathname === '/catalog' && <Filter catalog={true}/>
                    }
                    {
                        location.pathname.includes ('/sell') && <Filter catalog={true}/>
                    }
                    {
                        location.pathname.includes ('/rent') && <Filter catalog={true}/>
                    }

                </header>
        }

    </>
};


export default withRouter(Header);

