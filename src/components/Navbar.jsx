import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Navbar.scss';
import logo from '../assets/static/logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='container-fluid'>
          <Link className='navbar__brand' to='/'>
            <img className='navbar__brand-logo' src={logo} alt='Logo' />
            <span className='font-weight-light'>Platzi</span>
            <span className='font-weight-bold'>Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
