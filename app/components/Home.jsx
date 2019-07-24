import React, { Component } from 'react';
import { LandingNav, Register, Footer, ForgetPass } from './common';

class Home extends Component {
  state = {};
  render() {
    return (
      <div className='bg-color'>
        <LandingNav />
        <Register />
        <ForgetPass />
        <Footer />
      </div>
    );
  }
}

export default Home;
