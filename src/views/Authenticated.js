import React from 'react';
import PropTypes from 'prop-types';

export default function Authenticated({ user }) {
  return (
    <div className="text-center mt-5">
      <h1>Welcome, {user.fullName}!</h1>
      <img src={user.photo} alt={user.fullName} />
    </div>
  );
}

// NOTE: The propTypes are set agains the component and the term is camelCased
Authenticated.propTypes = {
  user: PropTypes.objectOf({
    name: PropTypes.string,
    photo: PropTypes.string,
  }).isRequired,
};
