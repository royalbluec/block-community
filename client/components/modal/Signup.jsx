import React, { useState, useCallback } from 'react';
import axios from 'axios';

import {
  StyledSignUpContainer,
  StyledSignUpHeader,
  StyledSignUpInput,
  StyledSignUpButton,
  StyledSignUpFooter,
  StyledErrorMessage,
  StyledSuccessMessage,
} from './styles/SignUp.styles';

const SignUp = ({ clickIsSignIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [message, setMessage] = useState('');

  const changeName = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const changeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const changePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const clickButton = useCallback(async () => {
    // 유효한 회원정보인지 검증
    const regName = /^[0-9a-zA-Z]{2,8}/;
    if (!regName.test(name)) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
    const regEmail = /^[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[a-zA-Z]{2,3}$/;
    if (!regEmail.test(email)) {
      setIsValidEmail(false);
    } else {
      setIsValidEmail(true);
    }
    const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/;
    if (!regPassword.test(password)) {
      setIsValidPassword(false);
    } else {
      setIsValidPassword(true);
    }

    // api 서버에 Request
    if (
      regName.test(name) &&
      regEmail.test(email) &&
      regPassword.test(password)
    ) {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/users`,
          {
            email: email,
            password: password,
            name: name,
          }
        );
        setMessage(data.message);
      } catch (e) {
        setMessage(e.response.data.message);
      }
    }
  }, [name, email, password]);

  return (
    <StyledSignUpContainer>
      <StyledSignUpHeader>Sign Up</StyledSignUpHeader>
      {(!isValidName || !isValidEmail || !isValidPassword) && (
        <StyledErrorMessage>
          {!isValidName && (
            <div>이름은 2 ~ 8자로 영어, 숫자만을 사용하세요.</div>
          )}
          {!isValidEmail && <div>이메일 형식에 맞지 않는 메일 주소입니다.</div>}
          {!isValidPassword && (
            <div>비밀번호는 8 ~ 20자로 영어, 숫자를 조합해서 사용하세요.</div>
          )}
        </StyledErrorMessage>
      )}
      <div>
        <div>
          <StyledSignUpInput
            type='text'
            placeholder='name'
            onChange={(e) => changeName(e)}
          />
        </div>
        <div>
          <StyledSignUpInput
            type='email'
            placeholder='email'
            onChange={(e) => changeEmail(e)}
          />
        </div>
        <div>
          <StyledSignUpInput
            type='password'
            placeholder='password'
            onChange={(e) => changePassword(e)}
          />
        </div>
        <StyledSignUpButton onClick={clickButton}>Sign Up</StyledSignUpButton>
        {message && <StyledSuccessMessage>{message}</StyledSuccessMessage>}
      </div>
      <StyledSignUpFooter>
        Already have an account? <div onClick={clickIsSignIn}>Sign In</div>
      </StyledSignUpFooter>
    </StyledSignUpContainer>
  );
};

export default SignUp;
