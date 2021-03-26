import React from 'react';
import PropTypes from 'prop-types';
import { ContentItem, FilterOther } from "../index";

const Content = ({data, type, filterData}) => {
    const renderData = data.filter(elem => elem.type === type);
    return <div className="Other__content">
        <FilterOther filterData={filterData}/>
        <ul className="Other__content-list">
            {
                renderData.map((item, index) => {
                    return <ContentItem key={`${item.price}_${index}`} dataItem={item}/>
                })
            }
        </ul>
        </div>
};

Content.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    filterData: PropTypes.arrayOf(PropTypes.object).isRequired,
    type: PropTypes.string.isRequired
};


export default Content;
