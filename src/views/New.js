import React from 'react';
import PropTypes from 'prop-types';
import RosterForm from '../components/RosterForm';

export default function New({ player, setPlayer, setEditPlayer }) {
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

New.propTypes = {
  player: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};
