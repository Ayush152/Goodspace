import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import OnboardingPage from './pages/OnboardingPage';
import DetailsPage from './components/DetailsPage';


function App() {
  // State to track whether the user is logged in

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/main"
          element={<MainPage isLoggedIn={isLoggedIn}/>}
        />
        <Route
          path="/onboarding"
          element={<OnboardingPage isLoggedIn={isLoggedIn}/>}
        />
      </Routes>
    </Router>
  );
}

export default App;