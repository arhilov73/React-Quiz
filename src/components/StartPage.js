import React from 'react';
import { NavLink } from 'react-router-dom';

// --- Start Page of Quiz with some rules
const StartPage = (props) => {
    return (
        <div className="container">
            <h1>React-Quiz game</h1>
            <p>
                In this quiz, you need to choose the correct answers. 
                For the correct answer to the "easy" level question, 
                1 point is given, for the correct answer to the "medium" 
                level question, 2 points are given, for the correct answer 
                to the "hard" level question, 3 points are given. 
                For an incorrect answer or an unselected option, 0 points are given.
                At the beginning you have to choose a category, 
                and at the end you will find out the results. Good luck!
            </p>
            <NavLink 
                to="/choice" 
                className="button"
                onClick={props.startQuiz}
            >START</NavLink>
        </div>
    )
}

export default StartPage;