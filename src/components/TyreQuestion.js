import React, { useState } from 'react';
import '../styles.css';

const TyreQuestion = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your question: "${question}" has been submitted.`);
    setQuestion(''); // Clear the input field after submission
  };

  return (
    <div className="tyre-question-wrapper">
      <div className="tyre-question-container">
        <h2>Have a Question About Tyres?</h2>
        <h2>Get an answer in 24 hours from our experts.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question here..."
            className="tyre-question-input"
          />
          <button type="submit" className="tyre-question-submit">
            Submit
          </button>
        </form>
      </div>
      <div className="tyre-background-container">
      </div>
    </div>
  );
};

export default TyreQuestion;
