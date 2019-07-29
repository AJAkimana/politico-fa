import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <Link to='/home' className='logo'>
          Politico
        </Link>
        <span className='navbar-toggle' id='js-navbar-toggle'>
          <i className='fas fa-bars'>Menu</i>
        </span>
        <ul className='main-nav' id='js-menu'>
          <li>
            <Link to='home' className='nav-links'>
              User dashboard
            </Link>
          </li>
          <li>
            <Link to='/' className='nav-links'>
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
