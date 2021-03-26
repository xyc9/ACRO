import React, {useContext} from 'react';
import { YMaps, Map, Placemark } from "react-yandex-maps";
import '../sass/_contactMap.scss'
import MyContext from "../context";

const mapData = {
    center: [55.751574, 37.573856],
    zoom: 9,
};

const coordinates = [
    [55.684758, 37.738521],
    [57.684758, 39.738521]
];




const ContactMap = ({isbc, elemId}) => {

    const value = useContext(MyContext);
    // console.log(value)

    return <>
            <YMaps>
                <Map defaultState={mapData} className={`${isbc ? 'contactMap--attribute' : 'contactMap'}`}>
                    {
                        isbc && value && <button className="contactMap--attribute__btn btnCommon" onClick={() => value.closeMap(elemId)}>Свернуть</button>
                    }
                    {
                        coordinates.map((coordinate, index) => <Placemark geometry={coordinate} key={index} />)
                    }
                </Map>
            </YMaps>
    </>;
};


export default ContactMap;
