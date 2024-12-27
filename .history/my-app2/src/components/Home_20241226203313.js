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

<div className="banner">
        <div className="slider" style="--quantity: 4">
            <a href="page1.html" className="item" style="--position: 1">
                <div className="card">Card 1</div>
            </a>
            <a href="page2.html" className="item" style="--position: 2">
                <div className="card">Card 2</div>
            </a>
            <a href="page3.html" className="item" style="--position: 3">
                <div className="card">Card 3</div>
            </a>
            <a href="page4.html" className="item" style="--position: 4">
                <div className="card">Card 4</div>
            </a>
        </div>
        <div className="content">
            <h1 data-content="CSS ONLY">SAHAYA</h1>
            <div className="author">
                <h2>Sahaya</h2>
            </div>
        </div>
    </div>
    </>
    // <div classNameName="banner">
    //   <div classNameName="slider" style={{ "--quantity": cards.length }}>
    //     {cards.map((card, index) => (
    //       <a
    //         key={card.id}
    //         href={card.link}
    //         classNameName="item"
    //         style={{ "--position": index + 1 }}
    //       >
    //         <div classNameName="card">{card.title}</div>
    //       </a>
    //     ))}
    //   </div>
    //   <div classNameName="content">
    //     <h1 data-content="CSS ONLY">SAHAYA</h1>
    //     <div classNameName="author">
    //       <h2>Sahaya</h2>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
