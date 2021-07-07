import React from 'react';
import { NavLink } from 'react-router-dom';

const ResultPage = (props) => {
    return (
        <div className="container">
            <h1>Results</h1>
            <p>Number of questions: {props.questionQuantity}</p>
            <p>Number of correct answers: {props.correctAnswers}</p>
            <p>Your score: {props.score}/{props.maxPoints}</p>
            <NavLink 
                to="/" 
                className="button"
                onClick={props.restart}
            >Restart</NavLink>
        </div>
    )
}

export default ResultPage;