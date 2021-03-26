import React from 'react';
import style from "../../../cssModuls/Officesingle.module.css";

const Desctiption_item = (props) =>{
    return(
        <p className={style.description_item}>
            <img src={props.img}  alt="" className={style.icon}/> {props.name}  <span>{props.item ? props.item : "0000000"}</span>
        </p>
    );
};
export default Desctiption_item