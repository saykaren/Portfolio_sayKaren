import React from 'react';
import './App.css';

function ContactMe(){
  return(
    <main
      className="contactMe"
    >
      <section
        id="contactTitle"
      >
        <strong>
          Contact Me
        </strong>
      </section>
      
      <section
        id="email"
        className="contactMeDetails"
      >
        <strong>
          <i class="fa fa-envelope" aria-hidden="true"></i>
        </strong> 
        <a href="mailto:saykaren@gmail.com">
          saykaren@gmail.com
        </a>
      </section>

      <section
        id="phone"
        className="contactMeDetails"
      >
        <strong>
          <i class="fa fa-phone" aria-hidden="true"></i>
        </strong> 
        <a href="tel:+3039468405">
          303.946.8405
        </a>
      </section>
      
      <section
        id="address"
        className="contactMeDetails"
      >
        <strong>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </strong> 
          Thornton, CO
      </section>
    </main>
  );
}



export default ContactMe