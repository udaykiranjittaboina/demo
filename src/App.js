import React, { useState } from 'react';
import './App.css'; 
import logo from './fords.png'; 
import banner from './banner.png'
import Form from './components/form';
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className={`topnav ${isOpen ? 'responsive' : ''}`} id="myTopnav">
        <a href="#home" className="active">
          <img src={logo} alt="Logo" className="logo" /> 
        </a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="javascript:void(0);" className="icon" onClick={toggleMenu}>
          &#9776;
        </a>
        <button className="register-btn">Register Now</button>
      </div>

      <section className="section-below">
        <div className="container">
        
          <h2 className="section-title">THE MAVERICKS CONVENTIONS</h2>
          <p className="section-text">The leela palace, bengaluru<br>
          </br> 20 july 2024 6pm</p>
        </div>
        <button className="register-btn" style={{background:'unset',
          color:'white'
        }}>Register Now</button>

        <div className="banner">
      <img src={banner} alt="Banner Image"/>
    </div>
    </section>
    <section className="grid-section">
        <div className="grid-container">
          <div className="grid-item">
          <h2>About</h2>
            <button className="register-btn" style={{background:'red',
          color:'white'
        }}>Register Now</button>
        </div>

          <div className="grid-item">
          <h2>ARTICLE</h2>
            Forbes is an American business magazine founded by B. C.<br></br>
             Forbes in 1917 and owned by Hong Kong-based investment <br></br>
             group Integrated Whale Media Investments since 2014. <br></br>
             Its chairman and editor-in-chief is Steve Forbes, <br></br>
             and its CEO is Mike Federle. It is based in Jersey <br></br>
             City, New Jersey. Wikipedia
       

          </div>
          <div className="grid-item">
          <h2></h2>
            <div className="forb">
      <img src='https://name.vukki.net/meaning/image/0-0-0-0-0-0/forbes.jpg' alt="forb Image" style={{
              height:'200px',
              maxWidth:'200px'}}
              />
</div>
          </div>
        </div>
      </section>


<Form></Form>
    </div>
  );
};

export default App;