import React from 'react';
import NBALogo from './images/nbalogo.svg';

export const Nav = () => {
  return (
    <div className="nav">
      <img className="nbalogo" src={NBALogo} alt="NBA Logo" />
      <ul className="nav-links">
        <li>About</li>
      </ul>
    </div>
  );
};
