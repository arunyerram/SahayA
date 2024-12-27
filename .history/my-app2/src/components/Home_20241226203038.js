import React from "react";
import "../Home.module.css";

const Home = () => {
  const cards = [
    { id: 1, title: "Card 1", link: "#page1" },
    { id: 2, title: "Card 2", link: "#page2" },
    { id: 3, title: "Card 3", link: "#page3" },
    { id: 4, title: "Card 4", link: "#page4" },
  ];

  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": cards.length }}>
        {cards.map((card, index) => (
          <a
            key={card.id}
            href={card.link}
            className="item"
            style={{ "--position": index + 1 }}
          >
            <div className="card">{card.title}</div>
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
