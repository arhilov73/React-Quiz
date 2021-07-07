import React from 'react';
import { NavLink } from 'react-router-dom';

const  FinishLink = (props) => {
    return (
        <NavLink 
            className="button" 
            to="/results" 
            onClick={props.getAnswer}
        >Finish</NavLink>
    )
}

export default FinishLink;