import React, { useState } from 'react';
import Nav from "./Nav.js";
import { saveFeedback } from './Firebase';
import "../css/Feedback.css"; // Assuming you'll add styles in this CSS file
import Footer from "./Footer.js"; // Uncommenting the Footer component
// import Footer from "./Footer.js";
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
      <div className="feedback-container">
        <h1 className="feedback-title">We Value Your Feedback</h1>
        <p className="feedback-subtitle">Help us improve by sharing your thoughts.</p>
        <div className="feedback-form">
          <textarea
            className="feedback-textarea"
            placeholder="Leave your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
          <button className="feedback-button" onClick={handleSubmit}>
            Submit Feedback
          </button>
          {message && <p className="feedback-message">{message}</p>}
        </div>
      </div>
      
      <Footer />
    </>
  );  
};

export default Feedback;
