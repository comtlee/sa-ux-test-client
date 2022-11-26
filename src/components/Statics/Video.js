import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import PropTypes from "prop-types";

const Video = ({ video }) => {
  return (
    <Wrapper>
      <video controls src={video} width="80%" height="600"></video>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem;

  video {
    margin-left: 10%;
    border: 4px groove ${COLORS.LIGHT_PINK};
    border-radius: 2rem;
  }
`;

Video.propTypes = {
  video: PropTypes.string.isRequired,
};

export default Video;
