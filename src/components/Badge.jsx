import React, { Component } from 'react';
import confLogo from '../assets/static/badge-header.svg';
import '../assets/styles/components/Badge.scss';

class Badge extends Component {
  render() {
    return (
      <div className='badge'>
        <div className='badge__header'>
          <img src={confLogo} alt='Logo de la conferencia' />
        </div>
        <div className='badge__section-name'>
          <img
            className='badge__avatar'
            src='https://www.gravatar.com/avatar?d=identicon'
            alt='Avatar'
          />
          <h1>
            Nathaly <br /> Riaño
          </h1>
        </div>
        <div className='badge__section-info'>
          <h3>Frontend Engineer</h3>
          <span>@nasterboost</span>
        </div>
        <div className='badge__footer'>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
