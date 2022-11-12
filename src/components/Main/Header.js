import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrapper>
        <HeaderImg src="/images/sa.png" alt="logo" />
        <h2>SA-UX-TEST</h2>
        <HeaderLogin>로그인</HeaderLogin>
      </Wrapper>
    </>
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

const HeaderLogin = styled.div`
  margin-right: 2rem;
`;

export default Header;
