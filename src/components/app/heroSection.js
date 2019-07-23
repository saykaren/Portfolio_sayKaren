import React from 'react';
import './App.css';
import ContactMe from './contact';
// import alannaHero from '../../assets/alanna_heroPic.jpg'
import sayKarenLogo from '../../assets/sayKaren_Logo_transparent_7.2019.png'

function HeroSection(){
  return(
    <div>
      <main
        className="heroSection"
        id="heroImage"
      >        
        <h1
        id="heroText"
        >
          Karen Garcia
          <section id="heroTitle">
            Frontend Developer
          </section>
        </h1>

        {/* <img src={alannaHero}
          alt="Alanna Teaching"
          id="heroContactPic"
          rel="noopener noreferrer"
        /> */}
        <h3 id="buttonSignUp">
          <a href="https://www.signupgenius.com/go/10C044DA9AB2AA46-alanna" 
            target="_blank"
            rel="noopener noreferrer"
            className="button"
            id="buttonMain"
          >
            Contact Me

          </a>
        </h3>
        <img src={sayKarenLogo}
          alt="sayKaren"
        />
      </main> 
    <ContactMe />
    </div> 
  );
};


export default HeroSection