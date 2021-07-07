import React from 'react';
import AnswerItem from './AnswerItem';
import NextButton from './NextButton';
import FinishLink from './FinishLink';

// --- Page with question
const QuestionPage = (props) => {

    // --- Information about current question
    const questionInfo = props.data[props.counter];

    // --- Correct and incorrect answers array
    const answersArray = questionInfo ? (
        [...questionInfo.incorrect_answers, questionInfo.correct_answer]
    ) : [];

    return (
        <div className="container">
            <h1>Question {props.counter + 1}</h1>
            <h2>{questionInfo ? questionInfo.question : ""}</h2>
            <h3>Difficulty: {props.data[props.counter].difficulty}</h3>
            <div className="answers">
                {answersArray.sort().map((answer, index) => {
                    return (
                        <AnswerItem 
                            answer={answer} 
                            index={index} 
                            key={"answer" + props.counter + index}
                            getLabelValue={props.getLabelValue}
                        />
                    )
                })}
            </div>
            { props.data.length !== props.counter + 1 ? (
                <NextButton getAnswer={props.getAnswer} />
            ) : <FinishLink getAnswer={props.getAnswer} /> }
        </div>
    )
}

export default QuestionPage;