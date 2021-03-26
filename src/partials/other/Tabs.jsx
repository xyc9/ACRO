import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({active, openTab, tabs}) => {
    return <>
        <ul className="Other__tabs">
            {
                tabs.map(item => {
                   return <li key={`${item.type}_${item.name}`} className={`${item.type === active ? 'active' : ''} Other__tabs-item`}>
                        <button className="Other__tabs-btn" data-typetab={item.type} onClick={openTab}>{item.name}</button>
                    </li>
                })
            }
        </ul>
    </>
};

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
    active: PropTypes.string.isRequired
};


export default Tabs;
