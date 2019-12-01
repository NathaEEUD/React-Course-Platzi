import React, { Component } from 'react';
import confLogo from '../assets/static/badge-header.svg';
import '../assets/styles/components/Badge.scss';
import Gravatar from './Gravatar';

class Badge extends Component {
  render() {
    return (
      <div id="badge">
        <div className="badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge__section-name">
          <Gravatar className="badge__avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="badge__section-info">
          <h3>{this.props.jobTitle}</h3>
          <span>@{this.props.twitter}</span>
        </div>
        <div className="badge__footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
