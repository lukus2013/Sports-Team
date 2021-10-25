import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getRoster = () => new Promise((resolve, reject) => {
  axios
    .get(`${dbURL}/roster.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createPlayer = (player) => new Promise((resolve, reject) => {
  axios
    .post(`${dbURL}/roster.json`, player)
    .then((obj) => {
      const firebaseKey = { firebaseKey: obj.data.name };
      axios
        .patch(`${dbURL}/roster/${obj.data.name}.json`, firebaseKey)
        .then(() => {
          getRoster().then(resolve);
        });
    })
    .catch(reject);
});

const deletePlayer = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .delete(`${dbURL}/roster/${firebaseKey}.json`)
    .then(() => getRoster().then(resolve))
    .catch(reject);
});

const updatePlayer = (player) => new Promise((resolve, reject) => {
  axios
    .patch(`${dbURL}/roster/${player.firebaseKey}.json`, player)
    .then(() => getRoster().then(resolve))
    .catch(reject);
});

export {
  getRoster, createPlayer, deletePlayer, updatePlayer,
};
