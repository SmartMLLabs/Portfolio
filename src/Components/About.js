import React from 'react';
import './style.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="row">
        <div className="col50">
          <h2 className="titleText"><span>A</span>bout US</h2>
          <p>SmartML Labs is an AI-based startup dedicated to creating innovative solutions that transform industries and enhance everyday life. Our mission is to leverage cutting-edge AI technology to provide advanced analytics, smart automation, personalized assistants, and predictive modeling across healthcare, finance, retail, manufacturing, and education sectors. With a focus on innovation, integrity, customer-centricity, and ethical AI, we aim to be a global leader in AI by delivering high-quality, user-friendly, and scalable solutions. Our expert team, strategic partnerships, and commitment to continuous R&D ensure we stay at the forefront of AI advancements, driving progress and creating value for our clients.</p>
        </div>
        <div className="col50">
          <div className="imgBx">
            {/* <img src="https://ibb.co/HHVrV14"></img> */}
            <img src="https://venturebeat.com/wp-content/uploads/2024/01/DALL%C2%B7E-2024-01-26-11.45.04-Generate-a-minimalist-abstract-illustration-that-represents-AI-code-generation-ensuring-it-contains-no-human-elements-or-facial-features.-The-design-.png?w=750" alt="About Us"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
