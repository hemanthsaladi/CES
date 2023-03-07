import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact__info">
        <div className="contact__info__item">
          <i className="fas fa-map-marker-alt"></i>
          <p>  CIVIL Engineering Student Society ,​NIT <br/>Durgapur West Bengal, INDIA, 713209 </p>
        </div>
        
        <div className="contact__info__item">
            <br></br>
          <i className="fas fa-phone-alt"></i>
          <p> +91 343 275 4176 , 4177</p>
        </div>
        <div className="contact__info__item">
          <i className="fas fa-envelope"></i>
          <p>cessnitdgp@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
