import React from 'react';
import {useParams} from 'react-router-dom';
import {AdditionalInfo, FormStatic, Other, SliderPanorama} from '../../partials'
import style from "../../cssModuls/Officesingle.module.css";

const OfficeSingle = (props) => {
    let { officeId } = useParams();

    const nameHead = [
        {
            name: 'Описание офиса',
            type: 'Description_office'
        },
        {
            name: 'Стоимость',
            type: 'Price'
        },
        {
            name: 'О здании',
            type: 'Plan'
        },
        {
            name: 'Карта',
            type: 'Map'
        },
    ];

    return <>

        <section className="section panorama">
            <SliderPanorama/>
            <div className={style.right_side}>
                <FormStatic/>
                <button className="btnCommon--gold btnAnimate">
                    Скачать презентацию
                </button>
            </div>

        </section>


        <section className="section">
            <AdditionalInfo data={nameHead}/>
        </section>
        <Other name={officeId} />
            <FormStatic/>

    </>
};



export default OfficeSingle;
