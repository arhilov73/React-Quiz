import React from 'react';

const AnswerItem = (props) => {

    let getCurrentValue = React.createRef();

    return (
        <div className="answer-container">
            <input type="radio" name="answer" id={"answer" + props.index} className="answer-radio"></input>
            <label 
                htmlFor={"answer" + props.index}
                ref={getCurrentValue}
                onClick={() => props.getLabelValue(getCurrentValue.current.innerHTML)}
            >
                {props.answer}
            </label>
        </div>
    )
}

export default AnswerItem;