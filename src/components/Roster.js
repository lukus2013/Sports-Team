import React from 'react';
import PropTypes from 'prop-types';
import { deletePlayer, updatePlayer } from '../api/data/rosterData';

export default function Roster({ player, setPlayer, setEditPlayer }) {
  const handleClick = (method) => {
    if (method === 'delete') {
      deletePlayer(player.firebaseKey).then(setPlayer);
    } else {
      updatePlayer({ ...player }).then(setPlayer);
    }
  };

  return (
    <>
      <div
        className="d-flex justify-content-between alert alert-light"
        role="alert"
      >
        {player.name}, {player.position}
        <button
          onClick={() => setEditPlayer(player)}
          className="btn btn-info"
          type="button"
        >
          Edit
        </button>
        <button
          onClick={() => handleClick('delete')}
          className="btn btn-danger"
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
}

Roster.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    position: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};
