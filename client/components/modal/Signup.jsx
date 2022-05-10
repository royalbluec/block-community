import React, { useState, useCallback } from 'react';

import {
  StyledSignUpHeader,
  StyledSignUpInput,
  StyledSignUpButton,
  StyledSignUpFooter,
} from './styles/SignUp.styles';

const Signup = ({ clickIsSignIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const changeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const changePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  console.log('signup name', name);
  console.log('signup email', email);
  console.log('signup password', password);

  return (
    <div>
      <StyledSignUpHeader>Sign Up</StyledSignUpHeader>
      <div>
        <div>
          <StyledSignUpInput
            placeholder='name'
            onChange={(e) => changeName(e)}
          />
        </div>
        <div>
          <StyledSignUpInput
            placeholder='email'
            onChange={(e) => changeEmail(e)}
          />
        </div>
        <div>
          <StyledSignUpInput
            placeholder='password'
            onChange={(e) => changePassword(e)}
          />
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
