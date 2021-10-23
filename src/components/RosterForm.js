import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPlayer, updatePlayer } from '../api/data/rosterData';

const initialState = {
  name: '',
  position: '',
  uid: '',
};

export default function RosterForm({ player, setPlayer, setEditPlayer }) {
  const [formInput, setFormInput] = useState(initialState);

  useEffect(() => {
    if (player.firebaseKey) {
      setFormInput({
        name: player.name,
        firebaseKey: player.firebaseKey,
        position: player.position,
        uid: player.uid,
      });
    }
  }, [player]);

  const clearForm = () => {
    setFormInput({ ...initialState });
    setEditPlayer({});
  };

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(formInput).then((players) => {
        setPlayer(players);
        clearForm();
      });
    } else {
      createPlayer({ ...formInput }).then((players) => {
        setPlayer(players);
        console.warn(setPlayer);
        clearForm();
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control form-control-lg me-3"
            type="text"
            id="name"
            name="name"
            value={formInput.name}
            onChange={handleChange}
            placeholder="Add a new player."
            required
          />
          <input
            className="form-control form-control-lg me-3"
            type="text"
            id="position"
            name="position"
            value={formInput.position}
            onChange={handleChange}
            placeholder="What is their position?"
            required
          />
          <button className="btn btn-success" type="submit">
            {player.firebaseKey ? 'Update' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
}

RosterForm.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
    position: PropTypes.string,
    uid: PropTypes.string,
  }),
  setPlayer: PropTypes.func.isRequired,
  setEditPlayer: PropTypes.func.isRequired,
};

RosterForm.defaultProps = {
  player: {},
};
