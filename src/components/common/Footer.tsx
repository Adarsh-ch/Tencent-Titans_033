import React from 'react';
import '../../styles/Footer.css'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='footer-main-Container'>
        <div className='footer-upper-box'>
          <div>
            <h1>Looking for your dream home?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
          <div>
            <button className='btn-get-intouch'>Get In Touch</button>
          </div>
        </div>
        <div className='main-footer'>
          <div className='footer-logo-section'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quae ducimus veniam vitae modi est.</p>
            <li><i className="fa-solid fa-location-dot"></i> Naser City, Cairo, Egypt</li>
            <li><i className="fa-solid fa-phone"></i>  (+20) 123 456 789 </li>
            <li><i className="fa-solid fa-envelope"></i> example@email.com</li>
            <hr />
            <div className='icons-div'>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-pinterest"></i>
            </div>
          </div>
          <div className='links-div'>
            <p>Company</p>
            <li><i className="fa-solid fa-arrow-right"></i><a href='#'> Home</a></li>
            <li><i className="fa-solid fa-arrow-right"></i><a href='#'> Properties</a></li>
            <li><i className="fa-solid fa-arrow-right"></i><a href='#'> Post Your Property</a></li>
          </div>
          <div className='footer-form'>
            <h4>NEWS LETTER</h4>
            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
            <div className="footer-input">
            <input type="text" placeholder='Your email' />
            <button><i className="fa-solid fa-play"></i></button>
            </div>
            
          </div>
        </div>
      </div>
      <div className='all-right-footer'>All Rights Reserved © 2024</div>
    </footer>
  );
};

export default Footer;

