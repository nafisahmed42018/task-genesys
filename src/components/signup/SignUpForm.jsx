import React, { useRef, useState, useEffect } from 'react';
import './signupform.css';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';

const user_regex = /^[A-Z][a-z]{2,16}$/;
const pwd_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const email_regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const register_url = 'api/auth/register';

const SignUpForm = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();

  const [fname, setFName] = useState('');
  const [validfName, setValidfName] = useState(false);
  const [fNameFocus, setFNameFocus] = useState(false);

  const [lname, setLName] = useState('');
  const [validlName, setValidlName] = useState(false);
  const [lNameFocus, setLNameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fnameRef.current.focus();
  }, []);

  useEffect(() => {
    const fnresult = user_regex.test(fname);
    // console.log(fnresult);
    // console.log(fname);
    setValidfName(fnresult);
  }, [fname]);

  useEffect(() => {
    const lnresult = user_regex.test(lname);
    // console.log(lnresult);
    // console.log(lname);
    setValidlName(lnresult);
  }, [lname]);

  useEffect(() => {
    const emailresult = email_regex.test(email);
    // console.log(emailresult);
    // console.log(email);
    setValidEmail(emailresult);
  }, [email]);

  useEffect(() => {
    setValidPwd(pwd_regex.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [fname, lname, email, pwd, matchPwd]);

  const handleSubmit = async e => {
    e.preventDefault();
    const v1 = user_regex.test(fname);
    const v2 = user_regex.test(lname);
    const v3 = email_regex.test(email);
    const v4 = pwd_regex.test(pwd);
    if (!v1 || !v2 || !v3 || !v4) {
      setErrMsg('Invalid Entry');
      return;
    }
    try {
      const response = await axios.post(
        register_url,
        JSON.stringify({
          fname: fname,
          lname: lname,
          email: email,
          password: pwd,
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'Access-Allow-Origin': '*',
          },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attributes on inputs for this
      setFName('');
      setLName('');
      setEmail('');
      setPwd('');
      setMatchPwd('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className='signup__container'>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a className='already__registered' href='#'>
              Sign In
            </a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live='assertive'
          >
            {errMsg}
          </p>
          <h1 className='form__type'>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            {/* First Name Form Input */}
            <label htmlFor='fname'>
              First name{' '}
              <FontAwesomeIcon
                icon={faCheck}
                className={validfName ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validfName || !fname ? 'hide' : 'invalid'}
              />
            </label>
            <input
              placeholder='Enter your first name'
              className='fname__input'
              type='text'
              id='fname'
              ref={fnameRef}
              autoComplete='off'
              onChange={e => setFName(e.target.value)}
              required
              aria-invalid={validfName ? 'false' : 'true'}
              aria-describedby='uidnote'
              onFocus={() => setFNameFocus(true)}
              onBlur={() => setFNameFocus(false)}
            />
            <p
              id='uidnote'
              className={
                fNameFocus && fname && !validfName
                  ? 'instructions'
                  : 'offscreen'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              3 to 16 characters.
              <br />
              Must begin with a capital letter.
              <br />
              Special characters, numbers, underscores, hyphens are not allowed.
            </p>
            {/* Last Name Form Input */}
            <label htmlFor='lname'>
              Last name{' '}
              <FontAwesomeIcon
                icon={faCheck}
                className={validlName ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validlName || !lname ? 'hide' : 'invalid'}
              />
            </label>
            <input
              placeholder='Enter your last name'
              className='lname__input'
              type='text'
              id='lname'
              ref={lnameRef}
              autoComplete='off'
              onChange={e => setLName(e.target.value)}
              required
              aria-invalid={validlName ? 'false' : 'true'}
              aria-describedby='uidnote'
              onFocus={() => setLNameFocus(true)}
              onBlur={() => setLNameFocus(false)}
            />
            <p
              id='uidnote'
              className={
                lNameFocus && lname && !validlName
                  ? 'instructions'
                  : 'offscreen'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              3 to 16 characters.
              <br />
              Must begin with a capital letter.
              <br />
              Special characters, numbers, underscores, hyphens are not allowed.
            </p>
            {/* Email Form Input */}
            <label htmlFor='email'>
              Email{' '}
              <FontAwesomeIcon
                icon={faCheck}
                className={validEmail ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validEmail || !email ? 'hide' : 'invalid'}
              />
            </label>
            <input
              placeholder='your@email.com'
              className='email__input'
              type='email'
              id='email'
              ref={emailRef}
              autoComplete='off'
              onChange={e => setEmail(e.target.value)}
              required
              aria-invalid={validEmail ? 'false' : 'true'}
              aria-describedby='emailnote'
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id='emailnote'
              className={
                emailFocus && email && !validEmail
                  ? 'instructions'
                  : 'offscreen'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Type in a valid email address
            </p>
            {/* Password Form Input */}
            <label htmlFor='password'>
              Password
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? 'hide' : 'invalid'}
              />
            </label>
            <input
              className='pwd__input'
              placeholder='*********'
              type='password'
              id='password'
              onChange={e => setPwd(e.target.value)}
              value={pwd}
              required
              aria-invalid={validPwd ? 'false' : 'true'}
              aria-describedby='pwdnote'
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
            />
            <p
              id='pwdnote'
              className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{' '}
              <span aria-label='exclamation mark'>!</span>{' '}
              <span aria-label='at symbol'>@</span>{' '}
              <span aria-label='hashtag'>#</span>{' '}
              <span aria-label='dollar sign'>$</span>{' '}
              <span aria-label='percent'>%</span>
            </p>

            {/* Confirm Password Form Input */}
            <label htmlFor='confirm_pwd'>
              Confirm Password
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? 'hide' : 'invalid'}
              />
            </label>
            <input
              className='cpwd__input'
              placeholder='*********'
              type='password'
              id='confirm_pwd'
              onChange={e => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? 'false' : 'true'}
              aria-describedby='confirmnote'
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id='confirmnote'
              className={
                matchFocus && !validMatch ? 'instructions' : 'offscreen'
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
            <button
              className='signup__button'
              disabled={
                !validfName ||
                !validlName ||
                !validEmail ||
                !validPwd ||
                !validMatch
                  ? true
                  : false
              }
            >
              Sign Up
            </button>
          </form>
          <p>
            Already registered?
            <br />
            <span className='line'>
              {/*put router link here*/}
              <Link className='already__registered' to='/login'>
                Sign In
              </Link>
            </span>
          </p>
        </section>
      )}
    </div>
  );
};

export default SignUpForm;
