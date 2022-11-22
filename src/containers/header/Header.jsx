import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Building Amazing App's With GPT-3 Open AI</h1>
      <p>GPT-3 uses the latest and most robust technology in today's market. With already half a million active users yearly, we are confident you will enjoy and use GPT-3 in many beneficial ways. Sign up today, and join the growing community! </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt="ai"/>
    </div>
  </div>
);

export default Header;