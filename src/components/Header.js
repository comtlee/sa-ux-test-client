import React from "react";
// import SA from "../../public";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Wrapper>
        <HeaderImg src="/images/SA.png" alt="logo" />
        <h1>SA-UX-TEST</h1>
        <HeaderLogin>구글 로그인</HeaderLogin>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid black;
  justify-content: space-between;
`;

const HeaderImg = styled.img`
  margin-left: 1rem;
  width: 60px;
  height: 50px;
`;
const HeaderLogin = styled.div`
  margin-right: 2rem;
`;

export default Header;
