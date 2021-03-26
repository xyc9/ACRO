import React from 'react';
import {AdditionalInfo, FormStatic, Other, Preview, Slider} from "../../partials";
import {useParams} from "react-router-dom";


const BusinessCenterSingle = () => {
    let { bcId } = useParams();

    const nameHead = [
        {
            name: 'Общая информация',
            type: 'Description_bc'
        },
        {
            name: 'Дополнительная информация',
            type: 'MoreInfo_bc'
        },
        {
            name: 'Карта',
            type: 'Map'
        }
    ];

    return <>
        <section className="section">
            <Preview />
        </section>
        <section className="section">
            <AdditionalInfo data={nameHead}/>
        </section>
        <Other name={bcId}/>
        <section className="gallery">
            <div className="title">
                Похожие бизнес-центры рядом
            </div>
            <Slider bc={true}/>
        </section>
        <FormStatic/>
    </>
};

export default BusinessCenterSingle;
