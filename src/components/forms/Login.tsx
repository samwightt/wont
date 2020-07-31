import React from "react";
import { useAuth } from "reactfire";
import firebase from "firebase/app";

const LoginForm = () => {
  const auth = useAuth();

  const googleLogin = () => {
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  };

  const twitterLogin = () => {
    auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  };

  return (
    <div>
      <button onClick={googleLogin}>Login with Google</button>
      <button onClick={twitterLogin}>Login with Twitter</button>
    </div>
  );
};

export default LoginForm;
