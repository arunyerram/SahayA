// import React, { useState } from 'react';
// import Nav from "./Nav.js";
// import { saveFeedback } from './firebase';
// import Footer from "./footer.js";
// const Feedback = () => {
//   const [feedback, setFeedback] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async () => {
//     if (!feedback.trim()) {
//       setMessage('Feedback cannot be empty');
//       return;
//     }

//     try {
//       await saveFeedback(feedback);
//       setMessage('Feedback submitted successfully!');
//       setFeedback(''); // Clear the textarea
//     } catch (error) {
//       setMessage('Failed to submit feedback');
//     }
//   };

//   return (
//     <>
//       <Nav />
//       <h1>Feedback </h1>
//       <div className="form-floating">
//         <textarea
//           className="form-control"
//           placeholder="Leave a comment here"
//           id="floatingTextarea2"
//           value={feedback}
//           onChange={(e) => setFeedback(e.target.value)}
//         ></textarea>
//         <label htmlFor="floatingTextarea2">Feedback</label>
//         <button className="btn btn-primary mt-3" onClick={handleSubmit}>
//           Submit Feedback
//         </button>
//         {message && <p>{message}</p>}
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default Feedback;



import React, { useState } from 'react';
import Nav from "./Nav.js";
import { saveFeedback } from './Firebase';
import "./Feedback.css"; // Assuming you'll add styles in this CSS file
import Footer from "./Footer.js"; // Assuming you'll add a Footer component

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
      <div className="feedback-container margin-top:">
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
