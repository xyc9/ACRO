import React from 'react';
import PropTypes from 'prop-types';

const AdditionalInfoHead = ({title, index, active, openTab}) => {
    return <>
        <li className={`${index === active ? 'active' : ''}  AdditionalInfo__head-item`}>
            <button className="btnCommon-alt"
                    onClick={openTab}
                    data-index={index}
            >
                {title}
            </button>
        </li>
    </>
};

AdditionalInfoHead.propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    openTab: PropTypes.func
};


export default AdditionalInfoHead;
