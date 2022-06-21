/* eslint-disable default-case */
import React, {
  useState,
  useEffect,
} from 'react';
import './App.css';
import './Custom.css';
import 'antd/dist/antd.css';
import Router from './router/routes';
import awsconfig from './aws-exports';
import Amplify, { Auth, Hub } from 'aws-amplify';

Amplify.configure(awsconfig);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
        case 'cognitoHostedUI':
          getUser().then(userData => setUser(userData));
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'signIn_failure':
        case 'cognitoHostedUI_failure':
          console.log('Sign in failure', data);
          break;
      }
    });

    // getUser().then(userData => setUser(userData));
  }, []);

  function getUser() {
    return Auth.currentAuthenticatedUser()
      .then(userData => userData)
      .catch(() => console.log('Not signed in'));
  }

  return (
    // <div>
    //   <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
    //   {user ? (
    //     <button onClick={() => Auth.signOut()}>Sign Out</button>
    //   ) : (
    //     <>
    //     <button onClick={() => Auth.federatedSignIn({ provider: 'Facebook' })}>Sign On - Facebook</button>
    //     <button onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>Sign On - Google</button>
    //     </>
    //   )}
    // </div>
    <>
    <Router />
    </>
  );
}

export default App;
