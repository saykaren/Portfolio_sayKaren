import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Portfolio from './portfolio';
import ContactMe from './contact';
import Home from './home';

function NavigationBar(){
  return(
    
      <Router> 
          <div>
            <nav className="navBar">
              <div className="navLink">
                <Link to="/Home">Home</Link>
              </div>
              <div className="navLink"> 
                <Link to={"/Portfolio"}>Portfolio</Link>
                
              </div>
              <div className="navLink">
                <Link to={"/contact"}>Contact Me</Link>
                <section className="subNavLink"> 
                  <Link to={"/contact/FAQ"}>FAQ</Link>
                </section>
              </div>
            </nav>
          
            <Route exact strict path={"/"} component={Home}/>
            <Route path={"/Home"} component={Home}/>
            <Route exact strict path={"/Portfolio"} component={Portfolio}/>
            <Route path={'/contact'} component={ContactMe} />
              
          </div>
      </Router>
  
      
  );
};


export default NavigationBar