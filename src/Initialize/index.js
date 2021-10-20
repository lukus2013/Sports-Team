import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import { Container } from 'reactstrap';
import Navigation from '../components/Navigation';
import SignIn from '../views/SignIn';

function Initialize() {
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
          <h2>Create Your Fantasy Team</h2>
          <h3>Think deeply and create the team of your dreams.</h3>
          <h3>
            Your roster could be real or fake, just make one that will win the
            championship.
          </h3>
        </>
      ) : (
        <SignIn user={user} />
      )}
    </Container>
  );
}

export default Initialize;
