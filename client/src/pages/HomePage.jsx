import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import demo from '../assets/demo.svg';
import blueglow from '../assets/blueglow.png';
import { Player } from '@lottiefiles/react-lottie-player';
import { homeLottieJson } from '../utils/constants.js';
import "./HomePage.css";

const HomePage = () => {
  useEffect(() => {
    const googleTranslateElementInit = () => {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            autoDisplay: false,
            includedLanguages: 'en,hi,as,bn,gu,kn,ml,mni,mr,or,pa,ta,te,ur',
          },
          'google_translate_element'
        );
      } else {
        console.error('Google Translate API is not available.');
      }
    };

    googleTranslateElementInit();
  }, []);

  return (
    <div className="home-page">
      {/*<img src={blueglow} alt="pill" className="blueglow" />*/}

      <div className="home-nav">
        <NavLink to="/" style={{ textDecoration: 'none'}}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="logo" className="logo" />
            <span className="logo-text" style={{ textDecoration: 'none'}}>Aawish</span>
          </span>
        </NavLink>
        <NavLink to="/login" className="login-button">
          <img src={demo} alt="demo" className="demo-button" />
        </NavLink>
      </div>

      <div className="home-main">
        <div className="content">
          <h1>Re-imagine Telemedicine</h1>
          <p>
            Over the past decade, telemedicine has undergone a remarkable transformation, enabling
            healthcare providers to assess, diagnose, and provide remote treatment to patients
            using telecommunications technology.
          </p>
          <div className="buttons">
            <NavLink to="/login">
              <button className="begin" type="button">
                Login/Register
              </button>
            </NavLink>
            <NavLink to="/">
              <button className="view" type="button">
                View Info
              </button>
            </NavLink>
          </div>
        </div>
        <div><Player src={homeLottieJson} className="righthome" autoplay loop /></div>
      </div>
    </div>
  );
};

export default HomePage;
