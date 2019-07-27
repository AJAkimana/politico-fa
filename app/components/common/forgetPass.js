import React from 'react';

const ForgetPass = () => {
  return (
    <div id='forgetPswModal' className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <span className='close'>&times;</span>
          <h2>Forget password</h2>
        </div>
        <div className='modal-body'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Provide your email address'
          />
        </div>
        <div className='modal-footer'>
          <button className='btn btn-save'>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPass;
