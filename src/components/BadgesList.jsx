import React, { Component } from 'react';
import '../assets/styles/components/BadgesList.scss';

class BadgesListItem extends Component {
  render() {
    return (
      <div className='badges-list-item'>
        <img
          className='badges-list-item__avatar'
          src={this.props.badge.avatarUrl}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

class BadgesList extends Component {
  render() {
    return (
      <div className='badges-list'>
        <div className='badges__container'>
          <ul className='list-unstyled'>
            {this.props.badges.map(badge => {
              return (
                <li key={badge.id}>
                  <BadgesListItem badge={badge} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default BadgesList;