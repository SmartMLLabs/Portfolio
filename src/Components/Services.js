import React from 'react';
import './style.css';

function Services() {
  return (
    <section className="services" id="services">
      <div className="title">
        <h2 className="titleText"><span>O</span>ur Services</h2>
        <p>Smarter Solutions for a Smarter World</p>
      </div>
      <div className="wrapper">
        <div className="content-box">
          <div className="card">
            <i className="bx bx-laptop bx-md"></i>
            <h2>Web Application Development</h2>
            <p>At SmartML Labs, we specialize in creating intelligent web applications by integrating advanced AI technologies, enhancing user experiences, automating processes, and providing actionable insights for a smarter digital future.</p>
          </div>
          <div className="card">
            <i className="bx bx-mobile bx-md"></i>
            <h2>Application Development</h2>
            <p>At SmartML Labs, we excel in developing innovative applications by leveraging cutting-edge AI technologies, delivering personalized experiences, automating tasks, and providing actionable insights to drive smarter business decisions.</p>
          </div>
          <div className="card">
            <i className="bx bx-code bx-md"></i>
            <h2>Software Development</h2>
            <p>At SmartML Labs, we pioneer software development by incorporating advanced AI technologies, creating intelligent solutions that enhance user experiences, automate processes, and provide valuable insights for smarter business operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
