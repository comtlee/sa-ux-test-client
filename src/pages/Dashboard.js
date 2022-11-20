import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DOMAIN } from "../config/domain";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar";
import Graph from "../components/Statics/Graph";

const Dashboard = () => {
  const [visit, setVisit] = useState(Number);
  const [time, setTime] = useState({
    connectTime: "",
    disconnectTime: "",
  });
  const [site, setSite] = useState([]);
  const [click, setClick] = useState([]);

  const params = useParams();
  const { id: projectId } = params;
  localStorage.setItem("projectId", JSON.stringify(projectId));

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(
          `${DOMAIN}/tests/${JSON.stringify(projectId)}/testlist`,
        );

        const { visit, connectTime, disconnectTime, referrer } =
          response.data.testlist[0].basicEvent[0];
        const click = response.data.testlist[0].mouseEvent;

        setVisit(visit);
        setTime({ connectTime, disconnectTime });
        setSite(referrer);
        setClick(click);
      } catch (error) {
        console.log(error);
      }
    };
    axiosData();
  }, []);

  const keywordList = click.map((data) => JSON.parse(data.context));
  const keywordCounts = keywordList.reduce((name, count) => {
    name[count] = (name[count] || 0) + 1;
    return name;
  }, {});

  const keywordKeys = Object.keys(keywordCounts);
  const keywordValues = Object.values(keywordCounts);

  const tagList = click.map((data) => JSON.parse(data.tag));
  const tagCounts = tagList.reduce((name, count) => {
    name[count] = (name[count] || 0) + 1;
    return name;
  }, {});

  const tagKeys = Object.keys(tagCounts);
  const tagValues = Object.values(tagCounts);

  return (
    <>
      <Header />
      <Navbar />
      <Graph
        visitData={visit}
        timeData={time}
        siteData={site}
        keywordKeys={keywordKeys}
        keywordValues={keywordValues}
        tagKeys={tagKeys}
        tagValues={tagValues}
      />
    </>
  );
};

export default Dashboard;
