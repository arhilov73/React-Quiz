import React from 'react';
import { NavLink } from 'react-router-dom';

// --- On this page user should choose category
const ChoicePage = (props) => {
    return (
        <div className="container">
            <h1>Select a category</h1>
            <NavLink to="/sports" className="choice-link">{props.firstCategory}</NavLink>
            <NavLink to="/science_computers" className="choice-link">{props.secondCategory}</NavLink>
        </div>
    )
}

export default ChoicePage;