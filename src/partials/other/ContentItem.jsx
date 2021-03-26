import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom'


const ContentItem = ({dataItem}) => {

    const location = useLocation();
    return (
        <li className="Other__content-item">
            <div className="item-cell item__img">
                <img className="img" src={dataItem.photo} alt=""/>
            </div>
            <div className="item-cell item__square">
                <span className="attribute">{dataItem.square}</span>
                <span className="attribute-description">кв.м.</span>
            </div>
            <div className="item-cell item__price">
                <span className="attribute">{dataItem.price}</span>
                <span className="attribute-description">руб./мес.</span>
            </div>
            <div className="item-cell item__floor">
                <span className="attribute">{dataItem.floor}</span>
            </div>
            <div className="item-cell item__condition">
                <span className="attribute">{dataItem.condition}</span>
            </div>
            <div className="item-cell item__layout">
                <span className="attribute">{dataItem.layout}</span>
            </div>
            <Link to={'/catalog/office'} className="item-cell btnCommon-alt">
                Подробнее
            </Link>
        </li>
    );
};

ContentItem.propTypes = {
    dataItem: PropTypes.object.isRequired
};


export default ContentItem;
