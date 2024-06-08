import React from 'react';
import './style.css';

function Team() {
  const teamMembers = [
    {
      img: "rohit.png",
      name: "Rohit Kumar",
      role: "Data Scientist",
      instagram: "https://www.instagram.com/rohitkumar.0783/",
      linkedin: "https://www.linkedin.com/in/rohit7830/",
      email: "mailto:bpscrohit@gmail.com"
    },
    {
      img: "revanth.png",
      name: "Sai Revanth",
      role: "Machine Learning Engineer",
      instagram: "https://www.instagram.com/sairevanth0007/",
      linkedin: "https://www.linkedin.com/in/sairevanth0007/",
      email: "mailto:sairevanth0007@gmail.com"
    },
    {
      img: "rohan.png",
      name: "Rohan Jh",
      role: "UI/UX Designer",
      instagram: "https://www.instagram.com/rohan_jh/",
      linkedin: "https://www.linkedin.com/in/rohan-gnanesh-9a633a226/",
      email: "mailto:rohanjh44@gmail.com"
    },
    {
      img: "nikhil.png",
      name: "Nikhil Chowdary",
      role: "Software Developer",
      instagram: "https://www.instagram.com/nikh.cg/",
      linkedin: "https://www.linkedin.com/in/nikhil-chowdary-garikapati-2a5433212/",
      email: "mailto:nikhil15600@gmail.com"
    },
    {
      img: "ravi.jpeg",
      name: "Ravi Kumar",
      role: "Software Developer",
      linkedin: "https://www.linkedin.com/in/ravi2580",
      email: "mailto:koteravi.2580@gmail.com"
    },
    {
      img: "siva.jpeg",
      name: "Sivakanth Reddy",
      role: "Software Developer",
      instagram: "https://www.instagram.com/sivakanthreddy01",
      linkedin: "https://www.linkedin.com/in/sivakanth1",
      email: "mailto: shivakanth134@gmail.com"
    }
  ];

  return (
    <section className="team" id="team">
      <div className="title">
        <h2 className="titleText">Our <span>T</span>eam</h2>
        <p>Pioneering the Future of Technology with AI</p>
      </div>
      <div className="container">
        {teamMembers.map((member, index) => (
          <div className="box" key={index}>
            <div className="details">
              <img src={`/images/${member.img}`} alt={member.name} />
              <strong>{member.name}</strong>
              <p>{member.role}</p>
            </div>
            <div className="btns">
              {member.instagram && <a href={member.instagram} target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram bx-md"></i></a>}
              {member.linkedin && <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin bx-md"></i></a>}
              {member.email && <a href={member.email} target="_blank" rel="noopener noreferrer"><i className="bx bx-envelope bx-md"></i></a>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
