import React from 'react';
import './style.css';

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="content">
        <h2>SmartML Labs</h2>
        <p>The Future, Delivered Today</p>
        <a href="#services" className="btn">Explore</a>
      </div>
    </section>
  );
}

export default Banner;
