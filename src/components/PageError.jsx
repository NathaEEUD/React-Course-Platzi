import React from 'react';
import '../assets/styles/components/PageError.scss';

function PageError(props) {
  return (
    <div className="page-error">
      <span role="img" aria-label="error">
        ❌{props.error.message}😱
      </span>
    </div>
  );
}

export default PageError;
