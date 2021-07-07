import React from 'react';

const  NextButton = (props) => {
    return (
        <button className="button" onClick={props.getAnswer}>Next question</button>
    )
}

export default NextButton;