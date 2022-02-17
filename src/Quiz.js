import React, { useState, useEffect } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Money from './Money';
import Questions from './Questions';
import { Redirect } from 'react-router-dom';

function Quiz() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(false);
  const [question, setQuestion] = useState({});

  const [selectedOption, setSelectedOption] = useState(null);
  const [className, setClassName] = useState('option');
  const [abcd, setAbcd] = useState(0);

  const handleClick = (j) => {
    //event.preventDefault();
    console.log(j);

    setSelectedOption(j);
    setClassName('option active');
    console.log(selectedOption);

    setTimeout(() => {
      if (question.answer == j) {
        setClassName('option correct');
        if (question.id == 14) {
          alert('you have won 1 crore');
          window.location.href = 'https://react-aoawjr.stackblitz.io/';
        } else {
          setTimeout(() => {
            setCount(count + 1);
          }, 6000);
        }
      } else {
        setClassName('option wrong');

        setTimeout(() => {
          if (question.id == 0) {
            alert(`you have won 0 rupees`);
            window.location.href = 'https://react-aoawjr.stackblitz.io/';
          } else {
            alert(`you have won ${Money[15 - count].price}`);
            window.location.href = 'https://react-aoawjr.stackblitz.io/';
          }
        }, 6000);
      }
    }, 3000);
  };

  useEffect(() => {
    setQuestion(Questions[count]);
    setSelectedOption('');
  }, [Questions, count]);

  return (
    <div className="quizClass">
      <div className="questionPanel">
        <div className="questions">
          <div className="question">
            <h3>{question.question}</h3>
          </div>
          <div className="options">
            <h3
              className={
                selectedOption === question.option1 ? className : 'option'
              }
              onClick={() => handleClick(question.option1)}
            >
              {question.option1}
            </h3>
            <h3
              className={
                selectedOption === question.option2 ? className : 'option'
              }
              onClick={() => handleClick(question.option2)}
            >
              {question.option2}
            </h3>
            <h3
              className={
                selectedOption === question.option3 ? className : 'option'
              }
              onClick={() => handleClick(question.option3)}
            >
              {question.option3}
            </h3>
            <h3
              className={
                selectedOption === question.option4 ? className : 'option'
              }
              onClick={() => handleClick(question.option4)}
            >
              {question.option4}
            </h3>
          </div>
        </div>
      </div>
      <div className="moneyPanel">
        {Money.map((item, index) => {
          return (
            <div
              className={count === item.id ? 'moneyClass active' : 'moneyClass'}
            >
              <h3>{item.id + 1}</h3>
              <h2>{item.price}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Quiz;
