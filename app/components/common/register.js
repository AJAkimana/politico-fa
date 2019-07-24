import React from 'react';

const Register = () => {
  return (
    <section>
      <div className='row lg-padding'>
        <div className='col-smt-12 col-tab-4 col-lap-7 col-dsk-7'>
          <p className='landing-text text-center'>
            Politico enables citizens give their mandate to politicians running
            for different government offices while building trust in the process
            through transparency.
          </p>
        </div>
        <div className='col-smt-12 col-tab-6 col-lap-4 col-dsk-4 box-login'>
          <h2 className='text-center'>Register</h2>
          <div className='col-smt-12 col-tab-6 col-lap-4 col-dsk-4'>
            <label for='firstname'>First name</label>
            <input
              type='text'
              name='firstname'
              id='firstname'
              placeholder='First name'
            />
          </div>
          <div className='col-smt-12 col-tab-6 col-lap-4 col-dsk-4'>
            <label for='lastname'>Last name</label>
            <input
              type='text'
              name='lastname'
              id='lastname'
              placeholder='Last name'
            />
          </div>
          <div className='col-smt-12 col-tab-12 col-lap-4 col-dsk-4'>
            <label for='middlename'>Middle name</label>
            <input
              type='text'
              name='middlename'
              id='middlename'
              placeholder='Middle name'
            />
          </div>
          <div className='col-smt-12 col-tab-12 col-lap-12 col-dsk-12'>
            <label for='email'>Email</label>
            <input type='email' name='email' id='email' placeholder='Email' />
          </div>
          <div className='col-smt-12 col-tab-6 col-lap-6 col-dsk-6'>
            <label for='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
          </div>
          <div className='col-smt-12 col-tab-6 col-lap-6 col-dsk-6'>
            <label for='pswconfirm'>Confirm password</label>
            <input
              type='password'
              name='pswconfirm'
              id='pswconfirm'
              placeholder='Password confirm'
            />
          </div>
          <div className='col-smt-12 col-tab-6 col-lap-6 col-dsk-6'>
            <label for='phonenumber'>Phone number</label>
            <input
              type='text'
              name='phonenumber'
              id='phonenumber'
              placeholder='Phone number'
            />
          </div>
          <div className='col-smt-12 col-tab-6 col-lap-6 col-dsk-6'>
            <label for='passporturl'>Passport link</label>
            <input
              type='text'
              name='passporturl'
              id='passporturl'
              placeholder='Passport link'
            />
          </div>
          <div className='col-smt-12 gray-area'>
            <button className='btn-login btn-save' onclick='getAuth()'>
              Register
            </button>
          </div>
        </div>
        <div className='col-smt-12 col-tab-2 col-lap-1 col-dsk-1' />
      </div>
    </section>
  );
};

export default Register;
