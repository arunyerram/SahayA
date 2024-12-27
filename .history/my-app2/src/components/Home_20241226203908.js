// import React from "react";
import "../css/Home.module.css";
/* The line `import "./Home.css";` is importing a CSS file named "Home.css" into the JavaScript file.
This allows the styles defined in the CSS file to be applied to the components in the JavaScript
file, in this case, the `Home` component. */
import React, { useState } from "react";
// import "./Home.css";

const Home = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false]);

  const handleFlip = (index) => {
    const updatedFlipped = [...flippedCards];
    updatedFlipped[index] = !updatedFlipped[index];
    setFlippedCards(updatedFlipped);
  };

  return (
    <div className="card-container">
      {flippedCards.map((isFlipped, index) => (
        <div
          className={`card ${isFlipped ? "flipped" : ""}`}
          key={index}
          onClick={() => handleFlip(index)}
        >
          <div className="card-inner">
            <div className="card-front">Card {index + 1}</div>
            <div className="card-back">Back of Card {index + 1}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
