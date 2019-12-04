import React, { Component, useState, useMemo } from 'react';
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

function useSearchBadges(badges) {
  const [query, setQuery] = useState('');
  const [filteredBadges, setfilteredBadges] = useState(badges);

  useMemo(() => {
    const result = badges.filter(badge =>
      `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase()),
    );
    setfilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const { badges } = props;
  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div className="badges-list">
        <div className="badges__container">
          <div className="form-group">
            <label htmlFor="">Filter Badges</label>
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
              }}
            />
          </div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="badges-list">
      <div className="badges__container">
        <div className="form-group">
          <label htmlFor="">Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none">
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BadgesList;
