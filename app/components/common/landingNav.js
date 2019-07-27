import React from 'react';

const LandingNav = () => {
  return (
    <nav className='navbar'>
      <a href='' className='logo'>
        Politico
      </a>
      <span className='navbar-toggle' id='js-navbar-toggle'>
        <i className='fas fa-bars'>Log in</i>
      </span>
      <div className='main-nav' id='js-menu'>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email'
          className='sm-padding'
        />
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          className='sm-padding'
        />
        <button className='btn-login btn-save sm-padding'>Log in</button>
        <a className='text-white' href='#'>
          Forget password
        </a>
      </div>
    </nav>
  );
};

export default LandingNav;
