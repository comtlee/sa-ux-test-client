import React from "react";
import styled from "styled-components";

const ProjectLists = () => {
  return (
    <Wrapper>
      <ContentsList>
        <Title>Project Name</Title>
        <Content>UX-TEST</Content>
      </ContentsList>
      <ContentsList>
        <Title>Project Url</Title>
        <Content>https://www.sa-ux-test.com</Content>
      </ContentsList>
      <ContentsList>
        <Title>Script Tag</Title>
        <Content>
          type=text/javascript
          src=http://localhost:8080/tests/ux-test?key=a1b2c3
        </Content>
      </ContentsList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vmin;
  height: 30vmin;
  margin: 2rem;
  padding: 1rem;
  border-radius: 2rem;
  box-shadow: 0 1px 6px 0 #c0c0c0;
`;

const ContentsList = styled.div`
  margin: 0.4rem;
`;

const Title = styled.div`
  margin-bottom: 0.2rem;
  font-size: 1.4rem;
  color: #c0c0c0;
`;

const Content = styled.div`
  font-size: 0.8rem;
  color: #585858;
`;

export default ProjectLists;
