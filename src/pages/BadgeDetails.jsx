import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/BadgeDetails.scss';
import confLogo from '../assets/static/platzi-conf-logo.svg';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
  const [count, setCount] = useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
}

function BadgeDetails(props) {
  const [count, setCount] = useIncreaseCount(4);

  const { badge } = props;

  return (
    <div>
      <div className="badge-details__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Conference Logo" />
            </div>
            <div className="col-6 badge-details__hero-attendant-name">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <button
                className="btn btn-warning mr-4 mb-4"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                Increase Count:::> {count}
              </button>
              <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mb-4">
                Edit
              </Link>
            </div>
            <div>
              <button className="btn btn-danger" onClick={props.onOpenModal}>
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
