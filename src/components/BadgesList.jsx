import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/BadgesList.scss';
import Gravatar from './Gravatar';

class BadgesListItem extends Component {
  render() {
    return (
      <div className="badges-list-item">
        <Gravatar className="badges-list-item__avatar" email={this.props.badge.email} />

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
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }

    return (
      <div className="badges-list">
        <div className="badges__container">
          <ul className="list-unstyled">
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
