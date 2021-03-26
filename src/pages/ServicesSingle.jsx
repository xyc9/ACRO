import React from 'react';
import {useParams} from 'react-router-dom';
import { FormStatic, Intro, SliderAdvantage } from '../partials'


const ServicesSingle = (props) => {
    let { topicId } = useParams();
    const arr = [
        {
            id: 1,
            name:'Башня 1',
            isOpenMap: false,
            urlId: 1234,
            bcUrl: 'bashnya_1',
        },
        {
            id: 2,
            name:'Башня 2',
            isOpenMap: false,
            urlId: 1334,
            bcUrl: 'bashnya_2',
        },
        {
            id: 3,
            name:'Башня 3',
            isOpenMap: false,
            urlId: 453543,
            bcUrl: 'bashnya_3',
        },
        {
            id: 4,
            name:'Башня 44',
            isOpenMap: false,
            urlId: 45543,
            bcUrl: 'bashnya_44',
        }
    ];

    return <>
        <Intro/>
        <section className="section">
            <div className="title">
                {topicId}
            </div>
            <SliderAdvantage servicesSingle arr={arr}/>
        </section>
        <FormStatic/>
    </>
};


export default ServicesSingle;
