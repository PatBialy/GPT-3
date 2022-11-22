import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Access to Get Started</h4>
      <h1 className="gradient__text">The Possibilities Are <br /> Beyond Your Imagination</h1>
      <p>GPT-3 uses the latest and most robust technology in today's market. With already half a million active users yearly, we are confident you will enjoy and use GPT-3 in many beneficial ways. Sign up today, and join the growing community!</p>
      <h4>Request Access to Get Started</h4>
    </div>
  </div>
);

export default Possibility;