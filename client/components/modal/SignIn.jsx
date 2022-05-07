import React from 'react';

import {
  StyledSignInHeader,
  StyledSignInInput,
  StyledSignInButton,
  StyledSignInFooter,
} from './styles/SignIn.styles';

const SignIn = ({ clickIsSignIn }) => {
  return (
    <div>
      <StyledSignInHeader>Sign In</StyledSignInHeader>
      <div>
        <div>
          <StyledSignInInput placeholder='email' />
        </div>
        <div>
          <StyledSignInInput placeholder='password' />
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
