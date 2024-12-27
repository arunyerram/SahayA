import React from "react";


const Home = () => {
  return (
    <div className="banner">
      <div className="slider">
        <a href="#page1" className="item">
          <div className="card">Card 1</div>
        </a>
        <a href="#page2" className="item">
          <div className="card">Card 2</div>
        </a>
        <a href="#page3" className="item">
          <div className="card">Card 3</div>
        </a>
        <a href="#page4" className="item">
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
  );
};

export default Home;
