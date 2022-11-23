import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "../../constants/colors";
import PropTypes from "prop-types";

const Video = ({ videolist }) => {
  const location = useLocation();
  const [video, setVideo] = useState(null);

  const handleVideo = (e) => {
    setVideo(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <Wrapper>
      <LeftSide>
        {videolist &&
          videolist.map((list, i) => (
            <LeftCard key={list._id}>
              <VideoList state={{ backgroundLocation: list.fileUrl }}>
                <Index>{i + 1}번째 영상</Index>
                <Date>녹화된 날짜: {list.createdAt.split("T")[0]}</Date>
              </VideoList>
            </LeftCard>
          ))}
      </LeftSide>
      <RightSide>
        {/* 직접 파일 올릴 때 사용 */}
        <input type="file" onChange={handleVideo} />
        <iframe
          src={video}
          // src={location.state?.backgroundLocation}
          width="95%"
          height="600"
          allow="accelerometer; autoplay; clipboard-write"
          allowFullScreen
        ></iframe>
      </RightSide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const LeftSide = styled.div`
  float: left;
  width: 25%;
`;

const LeftCard = styled.div`
  width: 35vmin;
  height: 14vmin;
  margin: 1rem;
  padding: 0.8rem;
  -webkit-box-shadow: 2px 4px 10px 1px ${COLORS.LIGHT_GRAY};
  box-shadow: 2px 4px 10px 1px ${COLORS.LIGHT_GRAY};
  border-radius: 1rem;
`;

const VideoList = styled(Link)`
  color: transparent;
  text-decoration: none;
`;

const Index = styled.div`
  width: 11vmin;
  height: 4vmin;
  padding: 0.4rem;
  font-size: 1rem;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.LIGHT_PINK};
  border-radius: 1rem;
`;

const Date = styled.div`
  padding: 0.8rem;
  font-size: 1rem;
  color: ${COLORS.GRAY};
`;

const RightSide = styled.div`
  float: right;
  width: 75%;
  height: 100%;

  iframe {
    border-color: ${COLORS.BLACK};
    border-radius: 2rem;
  }
`;

Video.propTypes = {
  videolist: PropTypes.array.isRequired,
};

export default Video;
