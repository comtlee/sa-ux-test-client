import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { DOMAIN } from "../config/domain";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Graph from "../components/Statics/Graph";

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
        "생성된 프로젝트가 없습니다. 프로젝트를 생성해주세요!"
      )}
    </>
  );
};

export default Dashboard;
