import React, { useState } from 'react';
import Nav from "./Nav.js";
import { saveFeedback } from './firebase';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (!feedback.trim()) {
      setMessage('Feedback cannot be empty');
      return;
    }

    try {
      await saveFeedback(feedback);
      setMessage('Feedback submitted successfully!');
      setFeedback(''); // Clear the textarea
    } catch (error) {
      setMessage('Failed to submit feedback');
    }
  };

  return (
    <>
      <Nav />
      <h1>Feedback Section</h1>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <label htmlFor="floatingTextarea2">Feedback</label>
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Submit Feedback
        </button>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default Feedback;
