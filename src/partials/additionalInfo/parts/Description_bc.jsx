import React from 'react';

import style from '../../../cssModuls/Officesingle.module.css';
import icon1 from '../../../img/descriptionIcons/BusinessSingle/1.svg';
import icon2 from '../../../img/descriptionIcons/BusinessSingle/2.svg';
import icon3 from '../../../img/descriptionIcons/BusinessSingle/3.svg';
import icon4 from '../../../img/descriptionIcons/BusinessSingle/4.svg';
import icon5 from '../../../img/descriptionIcons/BusinessSingle/5.svg';
import icon6 from '../../../img/descriptionIcons/BusinessSingle/6.svg';
import Desctiption_item from "./Desctiption_item";


const Description_bc = (props) => {



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
            <div className={style.id}>
                <p>ID объекта : <span className={style.bold}>{props.id ? props.id : "Нет ID"}</span></p>
            </div>
            <div className="title">
                <p>{props.name}</p>
            </div>

            <div className={style.description}>
                <div className={style.object_description}>
                    <span>Описание:</span>
                    <p>
                        {props.description ? props.description : "У Обьекта нет описания"}
                    </p>
                </div>
            </div>
            <div className={style.description_grid}>
                {Descriptions}
            </div>
        </div>
    </>
};


export default Description_bc;
