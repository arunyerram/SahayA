import React from "react";
import "../css/Home.module.css";

const Home = () => {
  const cards = [
    { id: 1, title: "Card 1", link: "#page1" },
    { id: 2, title: "Card 2", link: "#page2" },
    { id: 3, title: "Card 3", link: "#page3" },
    { id: 4, title: "Card 4", link: "#page4" },
  ];

  return (
    <>

<div class="banner">
        <div class="slider" style="--quantity: 4">
            <a href="page1.html" class="item" style="--position: 1">
                <div class="card">Card 1</div>
            </a>
            <a href="page2.html" class="item" style="--position: 2">
                <div class="card">Card 2</div>
            </a>
            <a href="page3.html" class="item" style="--position: 3">
                <div class="card">Card 3</div>
            </a>
            <a href="page4.html" class="item" style="--position: 4">
                <div class="card">Card 4</div>
            </a>
        </div>
        <div class="content">
            <h1 data-content="CSS ONLY">SAHAYA</h1>
            <div class="author">
                <h2>Sahaya</h2>
            </div>
        </div>
    </div>
    </>
    // <div className="banner">
    //   <div className="slider" style={{ "--quantity": cards.length }}>
    //     {cards.map((card, index) => (
    //       <a
    //         key={card.id}
    //         href={card.link}
    //         className="item"
    //         style={{ "--position": index + 1 }}
    //       >
    //         <div className="card">{card.title}</div>
    //       </a>
    //     ))}
    //   </div>
    //   <div className="content">
    //     <h1 data-content="CSS ONLY">SAHAYA</h1>
    //     <div className="author">
    //       <h2>Sahaya</h2>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
