import React, { useState, useCallback } from 'react';

import {
  StyledSignInContainer,
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

  return (
    <StyledSignInContainer>
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
    </StyledSignInContainer>
  );
};

export default SignIn;
