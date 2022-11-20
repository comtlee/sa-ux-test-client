import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styled from "styled-components";

const Tag = ({ tagKeys, tagValues }) => {
  // const tagList = clickData.map((data) => JSON.parse(data.tag));
  // const counts = tagList.reduce((name, count) => {
  //   name[count] = (name[count] || 0) + 1;
  //   return name;
  // }, {});

  // const keys = Object.keys(counts);
  // const values = Object.values(counts);

  const data = {
    labels: tagKeys.map((key) => key),
    datasets: [
      {
        data: tagValues.map((value) => value),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      responsive: true,
      legend: {
        display: "top",
      },
    },
  };

  return (
    <Wrapper>
      <Title>많이 클릭된 태그</Title>
      <Pie data={data} options={options} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40vmin;
  height: 50vmin;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  border-radius: 10px;
`;

const Title = styled.div`
  text-align: center;
  color: #ffffff;
  border-radius: 0.2rem;
  background-color: #faa0a0;
`;

export default Tag;
