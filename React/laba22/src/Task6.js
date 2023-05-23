import React, { Component } from 'react';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: [
        {
          question: 'Питання 1',
          answers: [
            'Відповідь 1',
            'Відповідь 2',
            'Відповідь 3',
            'Відповідь 4',
            'Відповідь 5',
          ],
          right: 3,
          selected: null,
        },
        {
          question: 'Питання 2',
          answers: [
            'Відповідь 1',
            'Відповідь 2',
            'Відповідь 3',
            'Відповідь 4',
            'Відповідь 5',
          ],
          right: 1,
          selected: null,
        },
        {
          question: 'Питання 3',
          answers: [
            'Відповідь 1',
            'Відповідь 2',
            'Відповідь 3',
            'Відповідь 4',
            'Відповідь 5',
          ],
          right: 0,
          selected: null,
        },
      ],
    };
  }

  handleAnswerChange = (questionIndex, answerIndex) => {
    this.setState((prevState) => {
      const newTest = [...prevState.test];
      newTest[questionIndex].selected = answerIndex;
      return { test: newTest };
    });
  };

  checkAnswer = (questionIndex) => {
    const question = this.state.test[questionIndex];
    if (question.selected === null) {
      return;
    }
    if (question.selected === question.right) {
      return 'correct';
    }
    return 'incorrect';
  };

  render() {
    return (
      <div>
        {this.state.test.map((question, questionIndex) => (
          <div key={questionIndex}>
            <p>{question.question}</p>
            {question.answers.map((answer, answerIndex) => (
              <label key={answerIndex}>
                <input
                  type="radio"
                  name={`question-${questionIndex}`}
                  value={answerIndex}
                  checked={question.selected === answerIndex}
                  onChange={() => this.handleAnswerChange(questionIndex, answerIndex)}
                />
                {answer}
              </label>
            ))}
            <p style={{ color: this.checkAnswer(questionIndex) === 'correct' ? 'green' : 'red' }}>
              {this.checkAnswer(questionIndex) === 'correct' ? 'Відповідь правильна' : 'Відповідь неправильна'}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default Quiz;
