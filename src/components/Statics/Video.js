import React, { useState } from "react";
import styled from "styled-components";

const Video = () => {
  const [video, setVideo] = useState(null);

  const handleChangeVideo = (event) => {
    setVideo(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <Wrapper>
      <LeftSide>
        <input type="file" onChange={handleChangeVideo} />
      </LeftSide>
      <RightSide>
        <iframe
          src={video}
          width="100%"
          height="650"
          frameBorder="0"
          scrolling="no"
          allow="accelerometer; autoplay; clipboard-write;"
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

const RightSide = styled.div`
  float: right;
  width: 75%;
  height: 100%;
`;

export default Video;
