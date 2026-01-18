import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Listenings from './pages/Listenings';
import Unit from './pages/Unit';
import AboutAuthor from './pages/AboutAuthor';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="app">
      <header className="header" role="banner">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <Link to="/" className="logo-link" aria-label="Home">
            <span className="flag-emoji" role="img" aria-label="British flag">🇬🇧</span>
            <h1 className="site-title">Integrated Language Skills</h1>
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Listenings
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                aria-current={location.pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content" role="main">
        <Routes>
          <Route path="/" element={<Listenings />} />
          <Route path="/unit/:unitId" element={<Unit />} />
          <Route path="/about" element={<AboutAuthor />} />
        </Routes>
      </main>

      <footer className="footer" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Integrated Language Skills for Higher Education</p>
      </footer>
    </div>
  );
}

export default App;
