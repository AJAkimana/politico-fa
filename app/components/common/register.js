import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, setCurrentUser } from '../../actions';
import { ToastContainer } from 'react-toastify';
import { setToken } from '../../helpers';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        firstname: '',
        middlename: '',
        lastname: '',
        phoneNumber: '',
        email: '',
        passportUrl: '',
        password: '',
        password2: ''
      }
    };
    this.changeInput = this.changeInput.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    const { data, registerSuccess } = nextProps.auth;
    if (registerSuccess) {
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
  saveUser = () => {
    const { user } = this.state;
    this.props.registerUser(user);
  };
  render() {
    const {
      email,
      password,
      password2,
      firstname,
      lastname,
      phoneNumber,
      middlename,
      passportUrl
    } = this.state;
    return (
      <section>
        <ToastContainer />
        <div className='row lg-padding'>
          <div className='col-smt-12 col-tab-4 col-lap-7 col-dsk-7'>
            <p className='landing-text text-center'>
              Politico enables citizens give their mandate to politicians
              running for different government offices while building trust in
              the process through transparency.
            </p>
            <Link to='/home'>
              <button className='btn'>User dashboard</button>
            </Link>
          </div>
          <div className='col-smt-12 col-tab-6 col-lap-4 col-dsk-4 box-login'>
            <h2 className='text-center'>Register</h2>
            <div className='col-smt-12 col-tab-6 col-lap-4 col-dsk-4'>
              <label htmlFor='firstname'>First name</label>
              <input
                type='text'
                name='firstname'
                id='firstname'
                placeholder='First name'
                value={firstname}
                onChange={this.changeInput}
              />
            </div>
            <div className='col-smt-12 col-tab-6 col-lap-4 col-dsk-4'>
              <label htmlFor='lastname'>Last name</label>
              <input
                type='text'
                name='lastname'
                id='lastname'
                placeholder='Last name'
                value={lastname}
                onChange={this.changeInput}
              />
            </div>
            <div className='col-smt-12 col-tab-12 col-lap-4 col-dsk-4'>
              <label htmlFor='middlename'>Middle name</label>
              <input
                type='text'
                name='middlename'
                id='middlename'
                placeholder='Middle name'
                value={middlename}
                onChange={this.changeInput}
              />
            </div>
            <div className='col-smt-12 col-tab-12 col-lap-12 col-dsk-12'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email'
                value={email}
                onChange={this.changeInput}
              />
            </div>
            <div className='col-smt-12 col-tab-6 col-lap-6 col-dsk-6'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Password'
                value={password}
                onChange={this.changeInput}
              />
            </div>
            <div className='col-smt-12 col-tab-6 col-lap-6 col-dsk-6'>
              <label htmlFor='password2'>Confirm password</label>
              <input
                type='password'
                name='password2'
                id='password2'
                placeholder='Password confirm'
                value={password2}
                onChange={this.changeInput}
              />
            </div>
            <div className='col-smt-12 col-tab-6 col-lap-6 col-dsk-6'>
              <label htmlFor='phoneNumber'>Phone number</label>
              <input
                type='text'
                name='phoneNumber'
                id='phoneNumber'
                placeholder='Phone number'
                value={phoneNumber}
                onChange={this.changeInput}
              />
            </div>
            <div className='col-smt-12 col-tab-6 col-lap-6 col-dsk-6'>
              <label htmlFor='passportUrl'>Passport link</label>
              <input
                type='text'
                name='passportUrl'
                id='passportUrl'
                placeholder='Passport link'
                value={passportUrl}
                onChange={this.changeInput}
              />
            </div>
            <div className='col-smt-12 gray-area'>
              <button className='btn-login btn-save' onClick={this.saveUser}>
                Register
              </button>
            </div>
          </div>
          <div className='col-smt-12 col-tab-2 col-lap-1 col-dsk-1' />
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser, setCurrentUser }
)(Register);
