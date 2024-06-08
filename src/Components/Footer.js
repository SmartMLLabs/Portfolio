import React from 'react';
import './Footer.css';

function Footer() {
  return (
     <div className="footer">
            
       <div className="content">
        <h2>SmartML Labs</h2>
        <p>The Future, Delivered Today</p>
      </div>
            <div className="footer-section">
                <ul>
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <ul>
                    <li>
                        <i class="bi bi-instagram">
                            <a href="https://www.instagram.com/smartmllabs" target='_blank noopener noreferrer'> Instagram
                            </a>
                        </i>
                    </li>
                    <li>
                        <i class="bi bi-linkedin">
                            <a href="https://www.linkedin.com/company/102994614/admin/feed/posts/" target='_blank noopener noreferrer'>  LinkedIn
                            </a>
                        </i>
                    </li>
                    <li>
                        <i class="bi bi-twitter-x">
                            <a href="https://x.com/smartmllabs?s=11" target='_blank noopener noreferrer'>  X
                            </a>
                        </i>
                    </li>
                    <li><i class="bi bi-facebook"><a href="#">  Facebook</a></i></li>
                </ul>
            </div>
            {/* <div className="footer-section">
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div> */}
        </div>
  );
}

export default Footer;
