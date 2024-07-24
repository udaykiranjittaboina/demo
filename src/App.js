import React from 'react';
import './App.css'; 
import banner from './banner.png'

const App = () => {
  return (
    <div className="App">

      <header className="navbar">
        <div className="container">
          <a href="#" className="logo">
            <img src="https://w7.pngwing.com/pngs/709/652/png-transparent-forbes-magazine-business-advertising-jennifer-jones-glamour-company-text-service.png" alt="Logo" className="logo-img" />
          </a>
          <nav className="nav">
            <ul className="nav-ul">
              <li className="nav-li"><a href="#" className="nav-link">Home</a></li>
              <li className="nav-li"><a href="#" className="nav-link">About</a></li>
            </ul>
            <button className="register-btn">Register Now</button>
          </nav>
        </div>
      </header>

    
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
      <section className='about'>
      <div id="boxes">
        {/* <h1>About</h1> */}
 
        <div className="box1">
            <h2>About</h2>
            <button className="register-btn" style={{background:'red',
          color:'white'
        }}>Register Now</button>
        </div>
 
        <div className="box2">
            <h2>ARTICLE</h2>
            Forbes is an American business magazine founded by B. C.<br></br>
             Forbes in 1917 and owned by Hong Kong-based investment <br></br>
             group Integrated Whale Media Investments since 2014. <br></br>
             Its chairman and editor-in-chief is Steve Forbes, <br></br>
             and its CEO is Mike Federle. It is based in Jersey <br></br>
             City, New Jersey. Wikipedia
        </div>
 
        <div className="box3">
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
    </div>
  );
};

export default App
