import React from 'react';
import PropTypes from 'prop-types';
import {AdditionalInfoHead, AdditionalInfoContent} from "../index";

import '../../sass/_additionalInfo.scss'


const AdditionalInfo = ({data},{name}) => {
    const [ active, setActive ] = React.useState(0);
    const openTab = e => {
        setActive(+e.target.dataset.index);
    };

    return <>
        <div className="AdditionalInfo__wrapper">
            <ul className={data[3] ? 'AdditionalInfo__head' : 'AdditionalInfo__head AdditionalInfo__bc' }>
                {
                    data.map((item, index) => {
                        return <AdditionalInfoHead key={`${item.name}_${index}`}
                                                   title={item.name}
                                                   index={index}
                                                   active={active}
                                                   openTab={openTab}
                        />
                    })
                }
            </ul>
            {
                data[active] && <AdditionalInfoContent type={data[active].type} />
            }
        </div>
    </>
};

AdditionalInfo.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
};


export default AdditionalInfo;
