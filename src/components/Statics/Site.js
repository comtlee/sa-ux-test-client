import React from "react";
import getCount from "../../shared/getCount";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import PropTypes from "prop-types";

const Site = ({ siteData }) => {
  const siteCount = getCount(siteData[0].referrer, "site");

  const data = {
    labels: siteCount[0].map((site) => site),
    datasets: [
      {
        data: siteCount[1].map((site) => site),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Wrapper>
      <Title>유입 사이트</Title>
      <Bar data={data} options={options} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 75vmin;
  height: 40vmin;
  -webkit-box-shadow: 2px 4px 10px 1px ${COLORS.SHADOW};
  box-shadow: 2px 4px 10px 1px ${COLORS.SHADOW};
  border-radius: 10px;
`;

const Title = styled.div`
  text-align: center;
  color: ${COLORS.WHITE};
  border-radius: 0.2rem;
  background-color: ${COLORS.LIGHT_PINK};
`;

Site.propTypes = {
  siteData: PropTypes.array.isRequired,
};

export default Site;
