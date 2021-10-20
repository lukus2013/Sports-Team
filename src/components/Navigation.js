import React from 'react';
import { useHistory } from 'react-router';
import { ButtonGroup } from 'reactstrap';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  const history = useHistory();

  return (
    <div className="text-center mb-3">
      <ButtonGroup size="lg">
        <button
          onClick={() => history.push('/')}
          type="button"
          className="btn btn-light border border-dark"
        >
          Home
        </button>
        <button
          onClick={() => history.push('/team')}
          type="button"
          className="btn btn-light border border-dark"
        >
          My Team
        </button>
        <button
          onClick={() => history.push('/new')}
          type="button"
          className="btn btn-light border border-dark"
        >
          New
        </button>
        <button
          onClick={signOutUser}
          type="button"
          className="btn btn-danger border border-dark"
        >
          Sign Out
        </button>
      </ButtonGroup>
    </div>
  );
}
