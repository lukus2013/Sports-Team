import React from 'react';
import PropTypes from 'prop-types';
import Roster from '../components/Roster';

export default function Team({ player, setPlayer, setEditPlayer }) {
  return (
    <div>
      <div className="mt-5">
        {player.map((roster) => (
          <Roster
            key={player.firebaseKey}
            player={roster}
            setPlayer={setPlayer}
            setEditPlayer={setEditPlayer}
          />
        ))}
        ;
      </div>
    </div>
  );
}

Team.propTypes = {
  player: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};
