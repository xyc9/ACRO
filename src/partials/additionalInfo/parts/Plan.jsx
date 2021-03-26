import React from 'react';

import icon1 from "../../../img/descriptionIcons/BusinessSingle/1.svg";
import icon2 from "../../../img/descriptionIcons/BusinessSingle/2.svg";
import icon3 from "../../../img/descriptionIcons/BusinessSingle/3.svg";
import icon4 from "../../../img/descriptionIcons/BusinessSingle/4.svg";
import icon5 from "../../../img/descriptionIcons/BusinessSingle/5.svg";
import icon6 from "../../../img/descriptionIcons/BusinessSingle/6.svg";
import Desctiption_item from "./Desctiption_item";
import style from "../../../cssModuls/Officesingle.module.css";

const Plan = (props) => {

    let DescData = [
        {img: icon1 , name: 'Район' , item : '' },
        {img: icon2 , name: 'Класс здания' , item : '' },
        {img: icon3 , name: 'Адрес' , item : '' },
        {img: icon4 , name: 'Год постройки' , item : '' },
        {img: icon5 , name: 'Метро' , item : '' },
        {img: icon6 , name: 'Участок' , item : '' },
        {img: icon6 , name: 'До метро' , item : '' },
    ]
    let Descriptions = DescData.map(d=><Desctiption_item img={d.img} name={d.name} item={d.item} />)

    return <>
        <div className="AdditionalInfo__content-description">

            <div className="title">
                <p>{props.name ? props.name : 'Бизнес центр'}</p>
            </div>


            <div className={style.description_grid}>
                {Descriptions}
            </div>
        </div>
    </>
};


export default Plan;
