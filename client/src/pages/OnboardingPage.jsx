import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import modal1 from '../assets/modal1.png';
import modal2 from '../assets/modal2.png';
import modal3 from '../assets/modal3.png';

import "./OnboardingPage.css";
import DetailsPage from '../components/DetailsPage';

const OnboardingPage = () => {
  const [currentIndex, updateIndex] = useState(0);

  const handleNext = () => {
    updateIndex((prevIndex) => (prevIndex < 3 ? prevIndex + 1 : prevIndex));
  };

  const handlePrev = () => {
    updateIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="OnboardModal">
      <div className="modalcontainer">
        <h1>Step One: Onboarding</h1>
      </div>
      <br />
      <div className="model-item" style={{ display: currentIndex === 0 ? 'flex' : 'none' }}>
        <h1>1. About Privacy</h1>
        <img src={modal1} alt="graphic" className="graphics" />
        <p>
          We collect no data during your checkup, any video or audio is lost
          after you close this website.
        </p>
      </div>
      <div className="model-item" style={{ display: currentIndex === 1 ? 'flex' : 'none' }}>
        <h1>2. How it works</h1>
        <img src={modal2} alt="graphic" className="graphics2" />
        <p>
          We utilize bleeding-edge machine learning to generate a health
          report based off your video, speech, and emotion.
        </p>
      </div>
      <div className="model-item" style={{ display: currentIndex === 2 ? 'flex' : 'none' }}>
        <h1>3. Get instant help</h1>
        <img src={modal3} alt="graphic" className="graphics3" />
        <p>
          At the end, get a list of recommended local doctors based on your
          conditions. After you leave, we’ll purge all your data!
        </p>
      </div>
      <div className="model-item" style={{ display: currentIndex === 3 ? 'flex' : 'none' }}>
        <h1>4. Give us brief about the illness</h1>
        <DetailsPage/>
      </div>
      <div className="button-row">
        {currentIndex !== 0 ? (
          <button className="back" onClick={handlePrev}>
            Go Back
          </button>
        ) : (
          <Link to="/">
            <button className="back">Return Home</button>
          </Link>
        )}
        {currentIndex === 3 ? (
          <Link to="/main">
            <button className="next">Finish</button>
          </Link>
        ) : (
          <button className="next" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingPage;
