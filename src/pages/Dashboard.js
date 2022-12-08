import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { DOMAIN } from "../config/domain";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Graph from "../components/Statics/Graph";
import styled from "styled-components";

const Dashboard = () => {
  const params = useParams();
  const { id: projectId } = params;

  localStorage.setItem("projectId", JSON.stringify(projectId));

  const getTestList = async () => {
    return await axios.get(
      `${DOMAIN}/tests/${JSON.stringify(projectId)}/testlist`,
    );
  };

  const { data, isError } = useQuery("getTestList", getTestList, {
    initialData: {},
  });

  if (isError) {
    throw new Error("Error");
  }
  const isSuccess = data.data?.result === "success";

  const basicEvent = isSuccess && data.data?.testlist.basicEvent[0];
  const mouseEvent = isSuccess && data.data?.testlist.mouseEvent;

  return (
    <>
      <Header />
      <Navbar />
      {basicEvent ? (
        <Graph basicEvent={basicEvent} mouseEvent={mouseEvent} />
      ) : (
        <TextWrapper>
          <div>테스트 사이트로부터 정보를 받아올 수 없습니다.</div>
          <div>Project Key가 연결되었는지 다시 확인 부탁드립니다.</div>
        </TextWrapper>
      )}
    </>
  );
};

export default Dashboard;

const TextWrapper = styled.h2`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5rem;
`;
