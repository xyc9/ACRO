import React from 'react';
import { withRouter } from "react-router-dom";
import {showMenu} from "../redux/actions";
import {useDispatch } from "react-redux";

const MenuTrigger = ({location}) => {
    const dispatch = useDispatch();
    let width = window.matchMedia("(max-width: 1068px)");
    const openMenu = () => {
        dispatch(showMenu())
    };
    return <>
        {
            width.matches
            ?
                <button className="menu-trigger" onClick={openMenu}>
                    <svg className={`${location.pathname === '/contacts' ? "menu-trigger__iconBlue" : "menu-trigger__iconWhite"}`} width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path className="menu-trigger__path" d="M28 13.333H9.33334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className="menu-trigger__path" d="M28 8H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className="menu-trigger__path" d="M28 18.667H4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className="menu-trigger__path" d="M28 24H9.33334" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                :
                <></>
        }
    </>
};


export default withRouter(MenuTrigger);
