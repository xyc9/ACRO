import React from 'react';
import PropTypes from 'prop-types';
import {Content, ShowMore, Tabs} from "./index";

import '../sass/_other.scss'

import img from "../img/otherImg.jpg"

const Other = ({name}) => {
    const [ active, setActive ] = React.useState('rent');

    const openTab = e => {
        setActive(e.target.dataset.typetab);
    };

    const tabsName = [
        {
            name: 'Аренда',
            type: 'rent',
        },
        {
            name: 'Продажа',
            type: 'sell',
        }
    ];

    const otherItems = [
        {
            photo: img,
            square: '15.6',
            price: 22230084,
            floor: 13,
            condition: `С мебелью Под отделку`,
            layout: 'Корридорно-кабинетная',
            type: 'sell',
        },
        {
            photo: img,
            square: '34434.3',
            price: 343434,
            floor: 16,
            condition: 'С мебелью Под отделкуС мебелью Под отделку',
            layout: 'Корридорно-кабинетнаяС мебелью Под отделку',
            type: 'sell',
        },
        {
            photo: img,
            square: '15.6',
            price: 22230084,
            floor: 3,
            condition: 'С мебелью Под отделку С мебелью Под отделку',
            layout: 'Корридорно-кабинетная',
            type: 'rent',
        },
        {
            photo: img,
            square: '34434.3',
            price: 343434,
            floor: 8,
            condition: 'С мебелью Под отделку',
            layout: 'Корридорно-кабинетная Корридорно-кабинетная',
            type: 'rent',
        },
    ];

    const filterData = [
        {
            name: 'Фото',
            isFilter: false,
            type: 'photo'
        },
        {
            name: 'Площадь',
            isFilter: true,
            type: 'square'
        },
        {
            name: 'Цена',
            isFilter: true,
            type: 'price'
        },
        {
            name: 'Этаж',
            isFilter: true,
            type: 'floor'
        },
        {
            name: 'Состояние',
            isFilter: true,
            type: 'condition'
        },
        {
            name: 'Планировка',
            isFilter: false,
            type: 'layout'
        },
    ];

    return <section className="section">
        <div className="title">
           Офисы в аренду в {name}
        </div>
        <Tabs tabs={tabsName}
              active={active}
              openTab={openTab}
        />
        <Content data={otherItems}
                 filterData={filterData}
                 type={active}
        />
        <ShowMore/>
    </section>
};

Other.propTypes = {
    name: PropTypes.string.isRequired,
};
Other.defaultProps = {
    name: "Название секции"
};

export default Other;
