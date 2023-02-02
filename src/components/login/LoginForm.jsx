import React, { useRef, useState, useEffect, useContext } from 'react';
import './loginform.css';
import axios from '../../api/axios';
import useAuth from '../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const login_url = '/auth';

const LoginForm = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd]);

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        login_url,
        JSON.stringify({ email, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pwd, roles, accessToken });
      setEmail('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Email or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };
  return (
    <div className='signin__container'>
      <section>
        <p
          ref={errRef}
          className={errMsg ? 'errmsg' : 'offscreen'}
          aria-live='assertive'
        >
          {errMsg}
        </p>
        <h1 className='form__type'>Log in</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            className='email__input'
            type='email'
            id='email'
            ref={emailRef}
            autoComplete='off'
            onChange={e => setEmail(e.target.value)}
            value={email}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            className='pwd__input'
            type='password'
            id='password'
            onChange={e => setPwd(e.target.value)}
            value={pwd}
            required
          />
          <div className='signin__container-btn'>
            <button className='signin__button'>Sign In</button>
            <Link className='forgot__password' to='/reset-password'>
              Forgot Password
            </Link>
          </div>
        </form>
        <div className='register'>
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
      </section>
    </div>
  );
};

export default LoginForm;
