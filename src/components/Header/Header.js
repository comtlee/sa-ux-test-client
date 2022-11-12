import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../config/firebase";
import axios from "axios";
import { DOMAIN } from "../../config/domain";
import styled from "styled-components";

const Header = () => {
  const handleLogin = async () => {
    try {
      const signInUser = await signInWithPopup(auth, provider);
      const { user } = signInUser;
      const idToken = await user.getIdToken();

      const response = await axios.post(
        `${DOMAIN}/auth/login`,
        {
          name: user.displayName,
          email: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        },
      );
      // #server 응답 확인용
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <HeaderImg src="/images/sa.png" alt="logo" />
      <h2>SA-UX-TEST</h2>
      <LoginButton onClick={handleLogin}>로그인</LoginButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  margin: 0.6rem;
  border-bottom: 0.1rem solid black;
`;

const HeaderImg = styled.img`
  width: 80px;
  height: 50px;
  margin-left: 1rem;
`;

const LoginButton = styled.button`
  margin-right: 2rem;
  border-style: none;
  font-size: 1rem;
  cursor: pointer;
  background-color: transparent;
`;

export default Header;
