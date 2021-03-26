import React from 'react';
import {
    useRouteMatch
} from "react-router-dom";

import {FormStatic, ServiceCard} from '../partials'


import img1 from '../img/servicesCardImg1.jpg'
import img2 from '../img/servicesCardImg2.jpg'
import img3 from '../img/servicesCardImg3.jpg'


const Services = (props) => {
    const infoServices = [
        {
            img: img1,
            textTitle: 'Подбор недвижимости',
            url: 12121,
        },
        {
            img: img2,
            textTitle: 'Помещения от застройщиков',
            url: 7787,
        },
        {
            img: img3,
            textTitle: 'Готовый арендный бизнес',
            url: 53445,
        }
    ];
    let { url } = useRouteMatch();
    return <>
        <section className="section servicesCards">
            <ul className="servicesCards__list">
                {
                    infoServices.map((item, index) => {
                        return <ServiceCard key={`${item.url}_${index}`} info={item} slug={url}/>
                    })
                }
            </ul>
        </section>
        <FormStatic/>
    </>
};


export default Services;
