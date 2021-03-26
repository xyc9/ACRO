import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Price, Description_office, Description_bc ,  Plan,MoreInfo_bc, Map} from "../index";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setHeaderDescription} from "../../redux/actions";

const AdditionalInfoContent = ({type}) => {
    let { bcId } = useParams();



    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setHeaderDescription(bcId))

    },[bcId])

    useEffect(()=>{
        return ()=>dispatch(setHeaderDescription(null))
    },[])



    return <>

        <div className="AdditionalInfo__content">
            {type === 'Description_office' && <Description_office/>}
            {type === 'Description_bc' && <Description_bc name={bcId} />}
            {type === 'MoreInfo_bc' && <MoreInfo_bc />}
            {type === 'Price' && <Price/>}
            {type === 'Plan' && <Plan name={bcId}/>}
            {type === 'Map' && <Map/>}

        </div>
    </>
};

AdditionalInfoContent.propTypes = {
    type: PropTypes.string.isRequired
};


export default AdditionalInfoContent;
