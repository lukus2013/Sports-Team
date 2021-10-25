import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import New from '../views/New';
import Team from '../views/Team';

export default function Routes({ player, setPlayer, setEditPlayer }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home player={player} setPlayer={setPlayer} />}
        />
        <Route
          exact
          path="/new"
          component={() => (
            <New
              player={player}
              setPlayer={setPlayer}
              setEditPlayer={setEditPlayer}
            />
          )}
        />
        <Route
          exact
          path="/team"
          component={() => (
            <Team
              player={player}
              setPlayer={setPlayer}
              setEditPlayer={setEditPlayer}
            />
          )}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  player: PropTypes.arrayOf(PropTypes.object).isRequired,
  setPlayer: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};
