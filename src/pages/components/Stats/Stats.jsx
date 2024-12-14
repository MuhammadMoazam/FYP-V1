import React from 'react';
import './stats.css';

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stat">
        <span className="number">2</span>
        <span className="label">Years since start</span>
      </div>
      <div className="stat">
        <span className="number">20</span>
        <span className="label">Great employees</span>
      </div>
      <div className="stat">
        <span className="number">+200</span>
        <span className="label">Fantastic customers</span>
      </div>
      <div className="stat">
        <span className="number">+100</span>
        <span className="label">Reviews</span>
      </div>
    </div>
  );
};

export default Stats;