import React from 'react';

import linkedinLogo from './images/linkedin-logo.jpg'; 
import githubLogo from './images/github-logo.png'; 

function Header() {
  return (
    <header>
      <h1>Emre Yıldız</h1>
      <nav>
        <a href="https://github.com/thisisemre" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/emre-y%C4%B1ld%C4%B1z-756880170/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="social-icon" />
        </a>

      </nav>
    </header>
  );
}

export default Header;
