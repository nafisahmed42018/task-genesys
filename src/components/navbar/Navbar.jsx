import React, { useState } from 'react';
import './navbar.css';
import CartIcon from '../../assets/cart';
import SearchIcon from '../../assets/search';
import LogIcon from '../../assets/log';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const expandSearch = toggle => {
    if (toggle) {
      setToggle(!toggle);
    } else {
      setToggle(!toggle);
    }
    console.log(toggle);
  };

  return (
    <div className='navbar__container'>
      <div className='navwrapper'>
        <div className='left__section'>
          <h1>LOGO.</h1>
        </div>
        <div className='middle__section'>
          <div className='nav-link__wrapper'>
            <Link className='nav__link' to='/'>
              Home
            </Link>
            <div className='nav__link'>Shop</div>
            <div className='nav__link'>About</div>
            <div className='nav__link'>Blog</div>
            <div className='nav__link'>Feature</div>
            <div className='nav__link'>Contacts</div>
          </div>
        </div>
        <div className='right__section'>
          <div className='button__wrapper'>
            <div className='search__bar'>
              <input
                type='text'
                className={toggle ? 'input__search' : 'input__search-expand'}
                placeholder='Type to search...'
              />

              <button
                className='search__btn'
                onClick={() => expandSearch(toggle)}
              >
                {toggle ? <SearchIcon /> : <i className='bx bx-x'></i>}
              </button>
            </div>
            <button>
              <Link to='/login'>
                {' '}
                <LogIcon />
              </Link>
            </button>
            <button>
              <CartIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
