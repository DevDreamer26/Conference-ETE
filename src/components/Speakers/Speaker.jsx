import React from 'react';
import "./Speaker.css";

const Speaker = () => {
  return (
    <div className="speaker-container">
      <h2>Speakers</h2>
      <div className="speaker-list">
        {/* Speaker Cards */}
        <div className="speaker-card">
          <img src="speaker1.jpg" alt="Speaker 1" />
          <h3>Speaker Name 1</h3>
          <p>Description of Speaker 1</p>
        </div>
        <div className="speaker-card">
          <img src="speaker2.jpg" alt="Speaker 2" />
          <h3>Speaker Name 2</h3>
          <p>Description of Speaker 2</p>
        </div>
       
      </div>
    </div>
  );
};

export default Speaker;
