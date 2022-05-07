import React from 'react';

import {
  StyledSignUpHeader,
  StyledSignUpInput,
  StyledSignUpButton,
  StyledSignUpFooter,
} from './styles/SignUp.styles';

const Signup = ({ clickIsSignIn }) => {
  return (
    <div>
      <StyledSignUpHeader>Sign Up</StyledSignUpHeader>
      <div>
        <div>
          <StyledSignUpInput placeholder='name' />
        </div>
        <div>
          <StyledSignUpInput placeholder='email' />
        </div>
        <div>
          <StyledSignUpInput placeholder='password' />
        </div>
        <StyledSignUpButton>Sign Up</StyledSignUpButton>
      </div>
      <StyledSignUpFooter>
        Already have an account? <div onClick={clickIsSignIn}>Sign In</div>
      </StyledSignUpFooter>
    </div>
  );
};

export default Signup;
