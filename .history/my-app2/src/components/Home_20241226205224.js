// import React from "react";
import "../css/Home.modulecss";
/* The line `import "./Home.css";` is importing a CSS file named "Home.css" into the JavaScript file.
This allows the styles defined in the CSS file to be applied to the components in the JavaScript
file, in this case, the `Home` component. */
import React, { useState } from "react";
// import "./Home.css";

// import React from 'react';
// import './Card.css'; // Link to the CSS file

const Home = () => {
  const cardData = [
    { id: 1, text: 'Card 1', link: 'page1.html' },
    { id: 2, text: 'Card 2', link: 'page2.html' },
    { id: 3, text: 'Card 3', link: 'page3.html' },
    { id: 4, text: 'Card 4', link: 'page4.html' },
  ];

  return (
    <div className="banner">
      <div className="slider" style={{ '--quantity': cardData.length }}>
        {cardData.map((card, index) => (
          <a
            href={card.link}
            className="item"
            style={{ '--position': index + 1 }}
            key={card.id}
          >
            <div className="card">{card.text}</div>
          </a>
        ))}
      </div>
      <div className="content">
        <h1 data-content="CSS ONLY">SAHAYA</h1>
        <div className="author">
          <h2>Sahaya</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
