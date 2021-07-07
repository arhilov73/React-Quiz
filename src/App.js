import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StartPage from './components/StartPage';
import ChoicePage from './components/ChoicePage/ChoicePage';
import QuestionPage from './components/Question/QuestionPage';
import ResultPage from './components/Results/ResultPage';
import './App.css';

function App() {

  const [firstCategory, setFirstCategory] = useState({});
  const [secondCategory, setSecondCategory] = useState({});
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [labelValue, setLabelValue] = useState('');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [maxPoints, setMaxPoints] = useState(0);
  const [start, setStart] = useState(false);

  const questionQuantity = 5;

  // --- getting Api for sports category
  useEffect( () => {
      fetch('https://opentdb.com/api.php?amount=' + questionQuantity + '&category=21')
      .then((response) => response.json())
      .then((json) => {
          setFirstCategory(json)
      })
  }, []);

  // --- getting Api for science:computers category
  useEffect( () => {
      fetch('https://opentdb.com/api.php?amount=' + questionQuantity + '&category=18')
      .then((response) => response.json())
      .then((json) => {
          setSecondCategory(json)
      })
  }, []);

  const firstData = firstCategory.results ? firstCategory.results : "";
  const secondData = secondCategory.results ? secondCategory.results : "";

  // --- get label value after click
  const getLabelValue = (value) => {
    setLabelValue(value);
  }

  // --- some action after user answer
  const getAnswer = () => {
    if (firstData[counter].correct_answer === labelValue) {
      if (firstData[counter].difficulty === 'easy') {
        setScore(score + 1);
        setMaxPoints(maxPoints + 1);
      }
      if (firstData[counter].difficulty === 'medium') {
        setScore(score + 2);
        setMaxPoints(maxPoints + 2);
      }
      if (firstData[counter].difficulty === 'hard') {
        setScore(score + 3);
        setMaxPoints(maxPoints + 3);
      }
      setCorrectAnswers(correctAnswers + 1);
    } else {
      if (firstData[counter].difficulty === 'easy') {
        setMaxPoints(maxPoints + 1);
      }
      if (firstData[counter].difficulty === 'medium') {
        setMaxPoints(maxPoints + 2);
      }
      if (firstData[counter].difficulty === 'hard') {
        setMaxPoints(maxPoints + 3);
      }
    }
    if (secondData[counter].correct_answer === labelValue) {
      if (secondData[counter].difficulty === 'easy') {
        setScore(score + 1);
        setMaxPoints(maxPoints + 1);
      }
      if (secondData[counter].difficulty === 'medium') {
        setScore(score + 2);
        setMaxPoints(maxPoints + 2);
      }
      if (secondData[counter].difficulty === 'hard') {
        setScore(score + 3);
        setMaxPoints(maxPoints + 3);
      }
      setCorrectAnswers(correctAnswers + 1);
    } else {
      if (secondData[counter].difficulty === 'easy') {
        setMaxPoints(maxPoints + 1);
      }
      if (secondData[counter].difficulty === 'medium') {
        setMaxPoints(maxPoints + 2);
      }
      if (secondData[counter].difficulty === 'hard') {
        setMaxPoints(maxPoints + 3);
      }
    }
    counter < 4 ? setCounter(counter + 1) : setCounter(counter);
  }

  // --- restart quiz, zeroing values
  const restart = () => {
    setCounter(0);
    setScore(0);
    setCorrectAnswers(0);
    setMaxPoints(0);
    setLabelValue('');
    setStart(false);
  }

  // --- condition to start quiz
  const startQuiz = () => setStart(true);

  // --- App
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Route 
          path='/'
          render={() => !start ? <StartPage startQuiz={startQuiz} /> : null } 
        />
        <Route 
          path='/choice'
          render={() => <ChoicePage 
            firstCategory={firstData[0].category} 
            secondCategory={secondData[0].category}  
          />} 
        />
        <Route 
          path='/sports'
          render={() => <QuestionPage 
            counter={counter}
            data={firstData}
            getLabelValue={getLabelValue}
            labelValue={labelValue}
            getAnswer={getAnswer}  
          />} 
        />
        <Route 
          path='/science_computers'
          render={() => <QuestionPage 
            counter={counter}
            data={secondData}
            getLabelValue={getLabelValue}
            getAnswer={getAnswer}  
          />} 
        />
        <Route 
          path='/results'
          render={() => <ResultPage 
            questionQuantity={questionQuantity}
            correctAnswers={correctAnswers}
            score={score}
            maxPoints={maxPoints}
            restart={restart}
          />} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
