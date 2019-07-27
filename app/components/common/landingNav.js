import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser, setCurrentUser } from '../../actions';
import { ToastContainer } from 'react-toastify';
import { setToken } from '../../helpers';

class LandingNav extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        email: '',
        password: ''
      }
    };
    this.changeInput = this.changeInput.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { data, loginSuccess } = nextProps.auth;
    if (loginSuccess) {
      this.props.setCurrentUser(data.user);
      setToken(data.token);
      window.location.href = '/home';
    }
  }
  changeInput = e => {
    e.preventDefault();
    const user = { ...this.state.user };
    user[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ user });
  };
  authenticateUser = () => {
    const { user } = this.state;
    this.props.loginUser(user);
  };
  render() {
    const { email, password } = this.state;
    return (
      <nav className='navbar'>
        <ToastContainer />
        <Link to='/' className='logo'>
          Politico
        </Link>
        <span className='navbar-toggle' id='js-navbar-toggle'>
          <i className='fas fa-bars'>Log in</i>
        </span>
        <div className='main-nav' id='js-menu'>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            placeholder='Email'
            className='sm-padding'
            onChange={this.changeInput}
          />
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            placeholder='Password'
            className='sm-padding'
            onChange={this.changeInput}
          />
          <button
            className='btn-login btn-save sm-padding'
            onClick={this.authenticateUser}
          >
            Log in
          </button>
          <a className='text-white' href='#'>
            Forget password
          </a>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser, setCurrentUser }
)(LandingNav);
