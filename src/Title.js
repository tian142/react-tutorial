import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';

const Title = () => {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle">
        San Francisco Privately Owned Public Open Spaces
      </div>

      <div>
        <NavLink
          to="/"
          className="nav-link"
          activeClassName="nav-link-active"
          exact
        >
          List
        </NavLink>
        <NavLink
          to="/about"
          className="nav-link"
          activeClassName="nav-link-active"
          exact
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Title;
