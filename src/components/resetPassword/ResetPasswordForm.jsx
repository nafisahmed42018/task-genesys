import React, { useRef, useState } from 'react';
import './resetpassword.css';
import { Link } from 'react-router-dom';

const ResetPasswordForm = () => {
  const emailRef = useRef();

  const [email, setEmail] = useState('');
  return (
    <div className='resetpwd__container'>
      <section>
        <h1 className='form__type'>Reset your password</h1>
        <p className='desc'>We'll send you an email to reset your password.</p>
        <form>
          <label htmlFor='email'>Email</label>
          <input
            placeholder='your@mail.com'
            className='email__input'
            type='email'
            id='email'
            ref={emailRef}
            autoComplete='off'
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />
          <div className='reset__container-btn'>
            <button className='reset__button'>Reset</button>
            <Link className='forgot__password' to='/reset-password'>
              Cancel
            </Link>
          </div>
          <div className='reset'>
            <h1 className='new__customer'>New Customer?</h1>
            <p className='new__customer-desc'>
              Sign up for an account to take advantage of order tracking and
              history as well as pre-filled forms during checkout on subsequent
              orders.
            </p>
            <span className='line'>
              {/*put router link here*/}
              <Link className='need__registration' to='/register'>
                Register
              </Link>
            </span>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ResetPasswordForm;
