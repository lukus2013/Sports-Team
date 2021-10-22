import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import { Container } from 'reactstrap';
import Navigation from '../components/Navigation';
import SignIn from '../views/SignIn';
import Routes from '../routes';

function Initialize() {
  const [player, setPlayer] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfo = {
          name: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0],
        };
        setUser(userInfo);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <Container>
      {user ? (
        <>
          <Navigation />
          <h1>Welcome!</h1>
          <Routes player={player} setPlayer={setPlayer} />
        </>
      ) : (
        <SignIn user={user} />
      )}
    </Container>
  );
}

export default Initialize;
