import React from 'react';
import PropTypes from 'prop-types';

const FilterOther = ({filterData}) => {
    return  <div className="Other__filter">
        <ul className="Other__filter-list">
            {
                filterData.map((elem, index) => {
                    return  (
                        <li key={`${elem.name}_${index}`} className={`filterType_${elem.type} Other__filter-item`}>
                            {
                                elem.isFilter ?
                                    <div className="Other__filter-wrapperBtn">
                                        <button className="Other__filter-btn">
                                            <svg className="icon" viewBox="0 0 8 5" fill="none" >
                                                <path d="M4 0L7.5 3.5L6.795 4.205L4 1.415L1.205 4.205L0.5 3.5L4 0Z" fill="#283655"/>
                                            </svg>
                                        </button>
                                        <button className="Other__filter-btn">
                                            <svg className="icon" viewBox="0 0 8 5" fill="none">
                                                <path d="M4 4.99992L0.5 1.49992L1.205 0.794922L4 3.58492L6.795 0.794922L7.5 1.49992L4 4.99992Z" fill="#283655"/>
                                            </svg>
                                        </button>
                                    </div>
                                    : <></>
                            }
                            <span className="Other__filter-btn-text">{elem.name}</span>
                        </li>
                    )
                })
            }
            <li className="Other__filter-item">
                <span className="Other__filter-btn-text">&nbsp;</span>
            </li>
        </ul>
    </div>
};

FilterOther.propTypes = {
    filterData: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default FilterOther;
