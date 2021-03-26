import React from 'react';
import icon1 from "../../../img/descriptionIcons/OfficeSingle/R.svg";

import Desctiption_item from "./Desctiption_item";
import style from "../../../cssModuls/Officesingle.module.css";



const Price = (props) => {

    let DescData = [
        {img: icon1, name: 'Общая Стоимость', price: '222222'},
        {img: icon1, name: 'Стоимость за кв.м.', price: '3'}

    ]
    let PriceList = DescData.map(d => <Desctiption_item img={d.img} name={d.name} item={d.price}/>)
    return <>
        <div className="AdditionalInfo__content-description">
            <div className="title">
                <p>{props.name}</p>
            </div>
            <div className={style.description_grid}>
                {PriceList}
            </div>
        </div>
    </>
};


export default Price;
