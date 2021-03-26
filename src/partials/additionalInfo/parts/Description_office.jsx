import React from 'react';
import style from '../../../cssModuls/Officesingle.module.css';
import icon1 from '../../../img/descriptionIcons/OfficeSingle/1.svg';
import icon2 from '../../../img/descriptionIcons/OfficeSingle/2.svg';
import icon3 from '../../../img/descriptionIcons/OfficeSingle/3.svg';
import icon4 from '../../../img/descriptionIcons/OfficeSingle/4.svg';
import icon5 from '../../../img/descriptionIcons/OfficeSingle/5.svg';
import icon6 from '../../../img/descriptionIcons/OfficeSingle/6.svg';
import icon7 from '../../../img/descriptionIcons/OfficeSingle/7.svg';
import icon8 from '../../../img/descriptionIcons/OfficeSingle/8.svg';
import Desctiption_item from "./Desctiption_item";

const Description_office = (props) => {

    let DescData = [
        {img: icon1 , name: 'Общая площадь' , item : '' },
        {img: icon2 , name: 'Количество мокрых точек' , item : '' },
        {img: icon3 , name: 'Высота потолков' , item : '' },
        {img: icon4 , name: 'Электрическая мощноть' , item : '' },
        {img: icon5 , name: 'Планировка' , item : '' },
        {img: icon6 , name: 'Состояние' , item : '' },
        {img: icon6 , name: 'Этаж' , item : '' },
        {img: icon7 , name: 'Мебель' , item : '' },
        {img: icon8 , name: 'Помещение занято ' , item : '' },
    ]
    let Descriptions = DescData.map(d=><Desctiption_item img={d.img} name={d.name} item={d.item} />)

    return <>
        <div className="AdditionalInfo__content-description">
            <div className={style.id}>
                <p>ID объекта : <span className={style.bold}>{props.id ? props.id : "Нет ID"}</span></p>
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


export default Description_office;
