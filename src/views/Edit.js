import React from 'react';
import PropTypes from 'prop-types';
import RosterForm from '../components/RosterForm';

export default function Edit({ player, setPlayer, setEditPlayer }) {
  return (
    <>
      <RosterForm
        player={player}
        setPlayer={setPlayer}
        setEditPlayer={setEditPlayer}
      />
    </>
  );
}

Edit.propTypes = {
  player: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};
