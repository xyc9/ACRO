import React from 'react';
import style from '../../../cssModuls/Officesingle.module.css';
import icon1 from '../../../img/descriptionIcons/OfficeSingle/1.svg';
import Desctiption_item from "./Desctiption_item";
const MoreInfo_bc = (props) => {
let DescData = [
    {img: icon1 , name: 'Отопление' , item : 'Центральное' },
    {img: icon1 , name: 'ИФНС' , item : '№3' },
    {img: icon1 , name: 'Система пожаротушения' , item : 'Спринклерная' },
    {img: icon1 , name: 'Вентиляция' , item : 'Естественная' },
    {img: icon1 , name: 'Девелопер' , item : 'Выставочная' },
    {img: icon1 , name: 'Кондиционирование' , item : 'Центральное' },
    {img: icon1 , name: 'Управляющая компания' , item : 'ТСЖ «Уютный уют»' },
]
    let Descriptions = DescData.map(d=><Desctiption_item img={d.img} name={d.name} item={d.item} />)

    return <>
        <div className="AdditionalInfo__content-description MoreInfo_Bc">
            <div className={style.description_grid}>
                {Descriptions}
            </div>
        </div>
    </>
};


export default MoreInfo_bc;
