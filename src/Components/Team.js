import React from 'react';
import './style.css';

function Team() {
  return (
    <section className="team" id="team">
      <div className="title">
        <h2 className="titleText">Our <span>T</span>eam</h2>
        <p>Pioneering the Future of Technology with AI</p>
      </div>
      <div className="container">
        {[
          { img: "rohit.png", name: "Rohit Kumar", role: "Data Scientist" },
          { img: "revanth.png", name: "Sai Revanth", role: "Machine Learning Engineer" },
          { img: "rohan.png", name: "Rohan Jh", role: "UI/UX Designer" },
          { img: "nikhil.png", name: "Nikhil Chowdary", role: "Software Developer" },
          { img: "rohit.png", name: "Ravi Kumar", role: "Software Developer" },
          { img: "siva.jpeg", name: "Sivakanth Reddy", role: "Software Developer" }
        ].map((member, index) => (
          <div className="box" key={index}>
            <div className="details">
              <img src={`/images/${member.img}`} alt={member.name} />
              <strong>{member.name}</strong>
              <p>{member.role}</p>
            </div>
            <div className="btns">
              <a href="#"><i className="bx bxl-instagram bx-md"></i></a>
              <a href="#"><i className="bx bxl-linkedin bx-md"></i></a>
              <a href="#"><i className="bx bx-envelope bx-md"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
