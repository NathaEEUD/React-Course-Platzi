import React, { Component } from 'react';
import '../assets/styles/components/BadgeNew.scss';
import header from '../assets/static/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='badgeNew__hero'>
          <img src={header} alt='Header' className='img-fluid' />
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <Badge
                firstName='Nathaly'
                lastName='Riaño'
                avatarUrl='https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon'
                jobTitle='Frontend Engineer'
                twitter='nasterboost'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
