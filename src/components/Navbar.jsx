import React, { Component } from 'react';
import '../assets/styles/components/Navbar.scss';
import logo from '../assets/static/logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='container-fluid'>
          <a className='navbar__brand' href='/'>
            <img className='navbar__brand-logo' src={logo} alt='Logo' />
            <span className='font-weight-light'>Platzi</span>
            <span className='font-weight-bold'>Conf</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
