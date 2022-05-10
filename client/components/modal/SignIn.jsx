import React, { useState, useCallback } from 'react';

import {
  StyledSignInHeader,
  StyledSignInInput,
  StyledSignInButton,
  StyledSignInFooter,
} from './styles/SignIn.styles';

const SignIn = ({ clickIsSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const changePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  console.log('signin email', email);
  console.log('signin password', password);

  return (
    <div>
      <StyledSignInHeader>Sign In</StyledSignInHeader>
      <div>
        <div>
          <StyledSignInInput
            placeholder='email'
            onChange={(e) => changeEmail(e)}
          />
        </div>
        <div>
          <StyledSignInInput
            placeholder='password'
            onChange={(e) => changePassword(e)}
          />
        </div>
        <StyledSignInButton>Sign In</StyledSignInButton>
      </div>
      <StyledSignInFooter>
        Not a member yet? <div onClick={clickIsSignIn}>Sign Up</div>
      </StyledSignInFooter>
    </div>
  );
};

export default SignIn;
