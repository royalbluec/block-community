import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import {
  StyledSignInContainer,
  StyledSignInHeader,
  StyledSignInInput,
  StyledSignInButton,
  StyledSignInFooter,
  StyledErrorMessage,
  StyledSuccessMessage,
} from './styles/SignIn.styles';

import * as authActions from '../../store/modules/auth';

const SignIn = ({ clickIsSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const changeEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const changePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const clickButton = useCallback(async () => {
    // 유효한 회원정보인지 검증
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
    if (regEmail.test(email) && regPassword.test(password)) {
      try {
        const { data } = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/v1/auth`,
          {
            email: email,
            password: password,
          }
        );
        setMessage(data.message);
        // redux-toolkit을 이용한 전역상태로 isAuth 및 accessToken 관리
        dispatch(authActions.login({ accessToken: data.data }));
      } catch (e) {
        setMessage(e.response.data.message);
      }
    }
  }, [email, password]);

  return (
    <StyledSignInContainer>
      <StyledSignInHeader>Sign In</StyledSignInHeader>
      {(!isValidEmail || !isValidPassword) && (
        <StyledErrorMessage>
          {!isValidEmail && <div>이메일 형식에 맞지 않는 메일 주소입니다.</div>}
          {!isValidPassword && (
            <div>비밀번호는 8 ~ 20자로 영어, 숫자를 조합해서 사용하세요.</div>
          )}
        </StyledErrorMessage>
      )}
      <div>
        <div>
          <StyledSignInInput
            type='email'
            placeholder='email'
            onChange={(e) => changeEmail(e)}
          />
        </div>
        <div>
          <StyledSignInInput
            type='password'
            placeholder='password'
            onChange={(e) => changePassword(e)}
          />
        </div>
        <StyledSignInButton onClick={clickButton}>Sign In</StyledSignInButton>
        {message && <StyledSuccessMessage>{message}</StyledSuccessMessage>}
      </div>
      <StyledSignInFooter>
        Not a member yet? <div onClick={clickIsSignIn}>Sign Up</div>
      </StyledSignInFooter>
    </StyledSignInContainer>
  );
};

export default SignIn;
