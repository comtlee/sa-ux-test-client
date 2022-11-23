import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import PropTypes from "prop-types";

const Tag = ({ tagKeys, tagValues }) => {
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

Tag.propTypes = {
  tagKeys: PropTypes.array.isRequired,
  tagValues: PropTypes.array.isRequired,
};

export default Tag;
