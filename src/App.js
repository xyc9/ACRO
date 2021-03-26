import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './sass/all.scss'
import './sass/app.scss'
import Routes from "./route/Routes";
import { Aside, Footer, Header, Modal } from "./partials";
import Scroll from "./route/Scroll";
import { useSelector } from "react-redux";



function App(props) {
    // let [active, setActive] = useState(false);
    //
    // let b = document.querySelector('body');
    // const openMenu = () => {
    //     setActive(active = true);
    //     b.style.overflow = 'hidden';
    // };
    // const closeMenu = () => {
    //     setActive(active = false);
    //     b.style.overflow = 'auto';
    // };

    // let [activeModal, setActiveModal] = useState(false);
    // const openModal = () => {
    //     setActiveModal(activeModal = true);
    // };
    // const closeModal = () => {
    //     setActiveModal(activeModal = false);
    // };
    let width = window.matchMedia("(max-width: 1059px)");

     const modalActions = useSelector(state => state.modal.activeModal);
     const asideActions = useSelector(state => state.aside.activeMenu);

    return <>
        <BrowserRouter>
            {
                width.matches
                    ? (asideActions && <Aside/>)
                    : <Aside/>
            }
            <div className="content__wrapper">
                <Header />
                <main className="main">
                    <Scroll/>
                    <Routes />
                </main>
                <Footer />
            </div>
            { modalActions && <Modal /> }
        </BrowserRouter>
    </>
}

export default App;


