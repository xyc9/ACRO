import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import '../sass/_aside.scss';
import logo from '../img/icons/logo.svg';
import {useDispatch} from "react-redux";
import { hideMenu } from '../redux/actions'
import iconStar from '../img/icons/starCard.svg';

const Aside = ({location}) => {
    const wrapperRef = useRef();
    const asideRef = useRef();
    const dispatch = useDispatch();

    const handleOutsideClick = (e) => {
        let path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(asideRef.current)) {
            // closeMenu()
            dispatch(hideMenu())
        }
    };

    React.useEffect(() => {
        wrapperRef.current.addEventListener('click', handleOutsideClick)
    }, []);


    const closeMenu = () => {
        dispatch(hideMenu())
    };

    return <>
        <aside  ref={wrapperRef} className="aside">
            <div ref={asideRef} className="aside__wrapper">
                <div className="aside__header">
                    <Link to="/">
                        <img className="img" src={logo} alt=""/>
                    </Link>
                    <button className="btn-close" onClick={closeMenu}>
                        <svg className="btn-close__icon" width="32" height="32" viewBox="0 0 32 32">
                            <path d="M17.2533 15.9999L24.6222 8.63106C24.7678 8.46101 24.8439 8.24228 24.8353 8.01857C24.8266 7.79485 24.7339 7.58264 24.5756 7.42434C24.4173 7.26603 24.2051 7.17329 23.9814 7.16465C23.7577 7.15601 23.5389 7.2321 23.3689 7.37773L16 14.7466L8.63109 7.36884C8.46371 7.20146 8.2367 7.10742 7.99998 7.10742C7.76327 7.10742 7.53625 7.20146 7.36887 7.36884C7.20149 7.53622 7.10746 7.76324 7.10746 7.99995C7.10746 8.23666 7.20149 8.46368 7.36887 8.63106L14.7467 15.9999L7.36887 23.3688C7.27582 23.4485 7.20025 23.5466 7.14689 23.6569C7.09354 23.7671 7.06356 23.8873 7.05883 24.0097C7.0541 24.1321 7.07473 24.2542 7.11942 24.3682C7.1641 24.4823 7.23189 24.5859 7.31852 24.6725C7.40514 24.7592 7.50874 24.8269 7.62281 24.8716C7.73687 24.9163 7.85895 24.9369 7.98136 24.9322C8.10378 24.9275 8.2239 24.8975 8.33418 24.8441C8.44446 24.7908 8.54252 24.7152 8.62221 24.6222L16 17.2533L23.3689 24.6222C23.5389 24.7678 23.7577 24.8439 23.9814 24.8352C24.2051 24.8266 24.4173 24.7339 24.5756 24.5756C24.7339 24.4173 24.8266 24.205 24.8353 23.9813C24.8439 23.7576 24.7678 23.5389 24.6222 23.3688L17.2533 15.9999Z" fill="white"/>
                        </svg>
                    </button>
                </div>
                <div className="aside__content">
                    <nav>
                        <ul className="nav">
                            <li className={`${location.pathname === '/' ? 'active' : '' } nav__item `}>
                                <Link className="nav__item-link" to="/" onClick={closeMenu}>
                                    <svg className="nav__item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.4954 8.22044L8.49536 1.55377C8.2427 1.27244 7.75736 1.27244 7.5047 1.55377L1.5047 8.22044C1.41833 8.31617 1.36165 8.43493 1.34153 8.56228C1.32141 8.68963 1.33872 8.82008 1.39136 8.93777C1.49803 9.17844 1.7367 9.33311 2.00003 9.33311H3.33336V13.9998C3.33336 14.1766 3.4036 14.3462 3.52863 14.4712C3.65365 14.5962 3.82322 14.6664 4.00003 14.6664H6.00003C6.17684 14.6664 6.34641 14.5962 6.47143 14.4712C6.59646 14.3462 6.6667 14.1766 6.6667 13.9998V11.3331H9.33336V13.9998C9.33336 14.1766 9.4036 14.3462 9.52863 14.4712C9.65365 14.5962 9.82322 14.6664 10 14.6664H12C12.1768 14.6664 12.3464 14.5962 12.4714 14.4712C12.5965 14.3462 12.6667 14.1766 12.6667 13.9998V9.33311H14C14.1291 9.33366 14.2556 9.29663 14.3641 9.22654C14.4725 9.15645 14.5582 9.05632 14.6107 8.93837C14.6632 8.82042 14.6803 8.68973 14.6598 8.56226C14.6393 8.43478 14.5822 8.31601 14.4954 8.22044Z"
                                        />
                                    </svg>
                                    <span className="nav__item-text">Главная</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '/about' ? 'active' : '' } nav__item `}>
                                <Link className="nav__item-link" to="/about" onClick={closeMenu}>
                                    <svg className="nav__item-icon" width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M8 8C10.2094 8 12 6.20937 12 4C12 1.79063 10.2094 0 8 0C5.79063 0 4 1.79063 4 4C4 6.20937 5.79063 8 8 8ZM10.9937 9.01875L9.5 15L8.5 10.75L9.5 9H6.5L7.5 10.75L6.5 15L5.00625 9.01875C2.77812 9.125 1 10.9469 1 13.2V14.5C1 15.3281 1.67188 16 2.5 16H13.5C14.3281 16 15 15.3281 15 14.5V13.2C15 10.9469 13.2219 9.125 10.9937 9.01875Z"/>
                                    </svg>
                                    <span className="nav__item-text">О нас</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname.includes('/catalog') ? 'active' : '' } nav__item `}>
                                <Link className="nav__item-link" to="/catalog" onClick={closeMenu}>
                                    <svg className="nav__item-icon" width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M7 8L14 8" stroke="#9FA2B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 8L3 8" stroke="#9FA2B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 12L3 12" stroke="#9FA2B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M2 4L14 4" stroke="#9FA2B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 12L14 12" stroke="#9FA2B4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="nav__item-text">Каталог</span>
                                </Link>
                            </li>
                            <ul className="sub_menu">
                                <li className={`${location.pathname.includes('/rent') ? 'active' : '' } nav__item `}>
                                    <Link className="nav__item-link" to="/catalog/rent" onClick={closeMenu}>
                                        <span className="nav__item-text">•Аренда</span>
                                    </Link>
                                </li>
                                <li className={`${location.pathname.includes('/sell') ? 'active' : '' } nav__item `}>
                                    <Link className="nav__item-link" to="/catalog/sell" onClick={closeMenu}>
                                        <span className="nav__item-text">•Продажа</span>
                                    </Link>
                                </li>
                            </ul>
                            <li className={`${location.pathname.includes('/services') ? 'active' : '' } nav__item `}>
                                <Link className="nav__item-link" to="/services" onClick={closeMenu}>
                                    <svg className="nav__item-icon nav__item-icon--noFill" width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M6.66667 2H2V6.66667H6.66667V2Z" stroke="#9FA2B4" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 2H9.33331V6.66667H14V2Z" stroke="#9FA2B4" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M14 9.33301H9.33331V13.9997H14V9.33301Z" stroke="#9FA2B4" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M6.66667 9.33301H2V13.9997H6.66667V9.33301Z" stroke="#9FA2B4" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="nav__item-text">Услуги</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '/partners' ? 'active' : '' } nav__item `}>
                                <Link className="nav__item-link" to="/partners" onClick={closeMenu}>
                                    <svg className="nav__item-icon" width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M2.4 7.20039C3.2825 7.20039 4 6.48289 4 5.60039C4 4.71789 3.2825 4.00039 2.4 4.00039C1.5175 4.00039 0.8 4.71789 0.8 5.60039C0.8 6.48289 1.5175 7.20039 2.4 7.20039ZM13.6 7.20039C14.4825 7.20039 15.2 6.48289 15.2 5.60039C15.2 4.71789 14.4825 4.00039 13.6 4.00039C12.7175 4.00039 12 4.71789 12 5.60039C12 6.48289 12.7175 7.20039 13.6 7.20039ZM14.4 8.00039H12.8C12.36 8.00039 11.9625 8.17789 11.6725 8.46539C12.68 9.01789 13.395 10.0154 13.55 11.2004H15.2C15.6425 11.2004 16 10.8429 16 10.4004V9.60039C16 8.71789 15.2825 8.00039 14.4 8.00039ZM8 8.00039C9.5475 8.00039 10.8 6.74789 10.8 5.20039C10.8 3.65289 9.5475 2.40039 8 2.40039C6.4525 2.40039 5.2 3.65289 5.2 5.20039C5.2 6.74789 6.4525 8.00039 8 8.00039ZM9.92 8.80039H9.7125C9.1925 9.05039 8.615 9.20039 8 9.20039C7.385 9.20039 6.81 9.05039 6.2875 8.80039H6.08C4.49 8.80039 3.2 10.0904 3.2 11.6804V12.4004C3.2 13.0629 3.7375 13.6004 4.4 13.6004H11.6C12.2625 13.6004 12.8 13.0629 12.8 12.4004V11.6804C12.8 10.0904 11.51 8.80039 9.92 8.80039ZM4.3275 8.46539C4.0375 8.17789 3.64 8.00039 3.2 8.00039H1.6C0.7175 8.00039 0 8.71789 0 9.60039V10.4004C0 10.8429 0.3575 11.2004 0.8 11.2004H2.4475C2.605 10.0154 3.32 9.01789 4.3275 8.46539Z"/>
                                    </svg>
                                    <span className="nav__item-text">Партнерам</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '/contacts' ? 'active' : '' } nav__item `}>
                                <Link className="nav__item-link" to="/contacts" onClick={closeMenu}>
                                    <svg className="nav__item-icon nav__item-icon--noFill" width="16" height="16" viewBox="0 0 16 16">
                                        <path d="M14.6666 11.2797V13.2797C14.6674 13.4654 14.6294 13.6492 14.555 13.8193C14.4806 13.9894 14.3715 14.1421 14.2347 14.2676C14.0979 14.3932 13.9364 14.4887 13.7605 14.5482C13.5846 14.6077 13.3982 14.6298 13.2133 14.6131C11.1619 14.3902 9.19131 13.6892 7.45998 12.5664C5.84919 11.5428 4.48353 10.1772 3.45998 8.56641C2.33329 6.82721 1.63214 4.84707 1.41331 2.78641C1.39665 2.60205 1.41856 2.41625 1.47764 2.24082C1.53673 2.0654 1.63169 1.9042 1.75649 1.76749C1.88128 1.63077 2.03318 1.52155 2.2025 1.44675C2.37183 1.37196 2.55487 1.33325 2.73998 1.33307H4.73998C5.06351 1.32989 5.37717 1.44446 5.62248 1.65543C5.8678 1.8664 6.02803 2.15937 6.07331 2.47974C6.15772 3.11978 6.31428 3.74822 6.53998 4.35307C6.62967 4.59169 6.64908 4.85102 6.59591 5.10033C6.54274 5.34964 6.41922 5.57848 6.23998 5.75974L5.39331 6.60641C6.34235 8.27544 7.72428 9.65737 9.39331 10.6064L10.24 9.75974C10.4212 9.5805 10.6501 9.45697 10.8994 9.4038C11.1487 9.35063 11.408 9.37004 11.6466 9.45974C12.2515 9.68544 12.8799 9.84199 13.52 9.92641C13.8438 9.97209 14.1396 10.1352 14.351 10.3847C14.5624 10.6343 14.6748 10.9528 14.6666 11.2797Z" stroke="#9FA2B4" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span className="nav__item-text">Контакты</span>
                                </Link>
                            </li>
                            <li className={`${location.pathname === '/wish' ? 'active' : '' } nav__item `}>
                                <Link className="nav__item-link" to="/wish" onClick={closeMenu}>

                                        <img src={iconStar} className="nav__item-icon nav__item-icon--noFill" width="16" height="16"  alt=""/>

                                    <span className="nav__item-text">Избранные объекты</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <form action="#" className="aside__form">
                        <label className="aside__form-label">
                            <input className="inputCommon aside__form-input" type="search" placeholder="Поиск по сайту"/>
                            <button className="aside__form-btn" type="submit">
                                <svg className="aside__form-icon" width="16" height="16" viewBox="0 0 16 16">
                                    <path d="M14.2125 13.3516L10.1547 9.29375C10.7844 8.47969 11.125 7.48438 11.125 6.4375C11.125 5.18438 10.6359 4.00937 9.75156 3.12344C8.86719 2.2375 7.68906 1.75 6.4375 1.75C5.18594 1.75 4.00781 2.23906 3.12344 3.12344C2.2375 4.00781 1.75 5.18438 1.75 6.4375C1.75 7.68906 2.23906 8.86719 3.12344 9.75156C4.00781 10.6375 5.18438 11.125 6.4375 11.125C7.48438 11.125 8.47813 10.7844 9.29219 10.1562L13.35 14.2125C13.3619 14.2244 13.376 14.2338 13.3916 14.2403C13.4071 14.2467 13.4238 14.2501 13.4406 14.2501C13.4575 14.2501 13.4741 14.2467 13.4897 14.2403C13.5052 14.2338 13.5194 14.2244 13.5312 14.2125L14.2125 13.5328C14.2244 13.5209 14.2338 13.5068 14.2403 13.4912C14.2467 13.4757 14.2501 13.459 14.2501 13.4422C14.2501 13.4254 14.2467 13.4087 14.2403 13.3931C14.2338 13.3776 14.2244 13.3635 14.2125 13.3516ZM8.9125 8.9125C8.25 9.57344 7.37187 9.9375 6.4375 9.9375C5.50312 9.9375 4.625 9.57344 3.9625 8.9125C3.30156 8.25 2.9375 7.37187 2.9375 6.4375C2.9375 5.50312 3.30156 4.62344 3.9625 3.9625C4.625 3.30156 5.50312 2.9375 6.4375 2.9375C7.37187 2.9375 8.25156 3.3 8.9125 3.9625C9.57344 4.625 9.9375 5.50312 9.9375 6.4375C9.9375 7.37187 9.57344 8.25156 8.9125 8.9125Z" fill="#9FA2B4"/>
                                </svg>
                            </button>
                        </label>
                    </form>
                </div>
            </div>
        </aside>
    </>;
};


Aside.propTypes = {
    location: PropTypes.object.isRequired,
};


export default withRouter(Aside);
